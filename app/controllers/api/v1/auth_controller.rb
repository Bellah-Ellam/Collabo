# app/controllers/api/v1/auth_controller.rb
class Api::V1::AuthController < ApplicationController
   before_action :authenticate_user!, only: [:show_current_user]


  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      payload = { user_id: user.id }
      token = JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
      render json: { token: token ,user: user}
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
    # Extract the JWT token from the Authorization header
    header = request.headers['Authorization']
    token = header.split.last if header
  
    # If the token exists, you can choose to invalidate or revoke the token here.
    # For the purpose of this example, let's assume you want to invalidate the token by adding it to a denylist.
  
    begin
      # Decode the JWT token to get the unique identifier (jti) of the token
      decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
      jti = decoded_token.first['jti']
  
      render json: { message: 'Logout success' }
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'User not found' }, status: :unauthorized
    end
  end
  

  def denylist_jwt
    JwtDenylist.create(token: self.current_jwt_token)
  end
end
