# app/controllers/api/v1/registrations_controller.rb
class Api::V1::RegistrationsController < ApplicationController
    # before_action :authenticate_user!
    def create
      @user = User.new(user_params)
  
      if @user.save
        render json: { message: 'User registered successfully', user: @user }, status: :created
          else
        render json: { error: @user.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end
  
    private
    def user_params
        params.require(:user).permit(:user_name, :photo, :date_of_birth, :email, :password, :password_confirmation, :name)
      end

  
    # def authenticate_user!
    #   # Get the JWT token from the Authorization header
    #   token = request.headers['Authorization']&.split&.last
  
    #   # Check if the token exists
    #   unless token
    #     render json: { error: 'Missing token' }, status: :unauthorized
    #     return
    #   end
  
    #   begin
    #     # Decode the token using the secret key
    #     secret_key = '11390a221efadde65a734f9f7b42e4646ee3e4186edf4a984f055368c78a3ebd9525bef1e2875ffdb62aed87b1dbb76489ac8b2b269958b78eae2b98dc484c70'
        
    #     decoded_token = JWT.decode(token, secret_key, true, algorithm: 'HS256')
  
    #     # Here, the decoded_token is an array containing the payload (index 0) and header (index 1).
    #     # You can extract the user-related data from the payload and use it in your actions.
    #     user_id = decoded_token[0]['user_id']
    #     username = decoded_token[0]['username']
  
    #     # You may also want to check if the user exists in your database or perform additional validation.
  
    #   rescue JWT::DecodeError => e
    #     # Handle the case when the token is invalid or expired
    #     render json: { error: 'Invalid token' }, status: :unauthorized
    #   end
    end
  

  