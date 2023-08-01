class Api::V1::AuthController < ApplicationController
  #before_action :authenticate_user!, only: [:show_current_user]
    def login
        @user = User.find_by(email: params[:email])
    
        if @user&.valid_password?(params[:password])
          token = JWT.encode({ user_id: @user.id }, 'your_jwt_secret_key', 'HS256')
          render json: { token: token, success: "Successfully Logged in" }, status: :ok
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
      end

  

    # def current_user
    #   # Extract the JWT token from the Authorization header
    #   token = request.headers['Authorization']&.split&.last
  
    #   # Check if the token exists
    #   unless token
    #     return nil
    #   end
  
    #   begin
    #     # Decode the token using the secret key
    #     secret_key = 'your_jwt_secret_key'  # Replace with your actual JWT secret key
    #     decoded_token = JWT.decode(token, secret_key, true, algorithm: 'HS256')
  
    #     # Extract the user_id from the payload and find the corresponding user
    #     user_id = decoded_token[0]['user_id']
    #     @current_user ||= User.find_by(id: user_id)
    #   rescue JWT::DecodeError => e
    #     # Handle the case when the token is invalid or expired
    #     return nil
    #   end
    # end


    # Difference
    def current_user
      # Extract the JWT token from the Authorization header
      token = request.headers['Authorization']&.split&.last
    
      # Check if the token exists
      return nil unless token
    
      begin
        # Replace 'your_jwt_secret_key' with your actual JWT secret key
        secret_key = 'your_jwt_secret_key'
    
        # Verify the token and decode its payload
        decoded_token = JWT.decode(token, secret_key, true, algorithm: 'HS256')
    
        # Extract the user_id from the payload and find the corresponding user
        user_id = decoded_token.first['user_id']
        @current_user ||= User.find_by(id: user_id)
      rescue JWT::DecodeError, JWT::ExpiredSignature
        # Handle the case when the token is invalid or expired
        return nil
      end
    end
    
    

    def show
     
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: 'User not found or invalid token' }, status: :unauthorized
      end
    end
  
   
    def logout
      # Make sure the user is authenticated before proceeding
      if current_user
        # Extract the JWT token from the Authorization header
        token = request.headers['Authorization']&.split&.last
  
        begin
          # Decode the token using the secret key
          secret_key = 'your_jwt_secret_key'  # Replace with your actual JWT secret key
          decoded_token = JWT.decode(token, secret_key, true, algorithm: 'HS256')
        rescue JWT::DecodeError => e
          # Handle the case when the token is invalid or expired
          return render json: { error: 'Invalid token' }, status: :unprocessable_entity
        end
  
        # Check if the JWT token has already been invalidated
        if current_user.jwt_token_invalid?(decoded_token[0]['jti'])
          render json: { error: 'Token has already been invalidated' }, status: :unprocessable_entity
        else
          # Call the 'invalidate_jwt' method on the authenticated user to add the token to the denylist
          current_user.invalidate_jwt(decoded_token[0]['jti'], decoded_token[0]['exp'])
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
