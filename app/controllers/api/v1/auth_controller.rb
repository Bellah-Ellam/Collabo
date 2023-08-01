# app/controllers/api/v1/auth_controller.rb
class Api::V1::AuthController < ApplicationController
  before_action :authenticate_user!, only: [:show_current_user]


  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      payload = { user_id: user.id }
      token = JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
      render json: { token: token ,user:@current_user}
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def current_user
    header = request.headers['Authorization']
    token = header.split.last if header
    begin
      decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
      user_id = decoded_token.first['user_id']
      @current_user = User.find(user_id) # 
      render json: {user: @current_user}
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'User not found' }, status: :unauthorized
    end
  end   

  def users
    # Extract the JWT token from the Authorization header
    puts "tyry"
    token = request.headers['Authorization']&.split&.last
    puts token
    # Check if the token exists
    unless token
      render json: {error:"token does not exist"}
    end

    if token
      user_id = JwtService.decode_token(token)['user_id']
      puts ( user_id)
      @current_user ||= User.find_by(id: user_id)
      render json: current_user, status: :ok
    # rescue JWT::DecodeError => e
    #   # Handle the case when the token is invalid or expired
    #   render json: {error:"jwt error"}
    end
  end

 

  def forgot_password
    user = User.find_by(email: params[:email])
    if user.present?
      user.send_reset_password_instructions
      # You can add a success message here if you want to inform the user that the email has been sent.
    else
      # Handle the case when the email address is not found.
    end
  end

  def logout
    # Make sure the user is authenticated before proceeding
    if current_user
      # Extract the JWT token from the Authorization header
      token = request.headers['Authorization']&.split&.last

      begin
        decoded_token = JwtService.decode_token(token)
      rescue JWT::DecodeError => e
        # Handle the case when the token is invalid or expired
        return render json: { error: 'Invalid token' }, status: :unprocessable_entity
      end

      # Check if the JWT token has already been invalidated
      if current_user.jwt_token_invalid?(decoded_token['jti'])
        render json: { error: 'Token has already been invalidated' }, status: :unprocessable_entity
      else
        # Call the 'invalidate_jwt' method on the authenticated user to add the token to the denylist
        current_user.invalidate_jwt(decoded_token['jti'], decoded_token['exp'])
        render json: { success: 'Logout success' }
      end
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def denylist_jwt
    JwtDenylist.create(token: self.current_jwt_token)
  end
end
