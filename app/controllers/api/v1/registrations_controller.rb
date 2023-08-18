# app/controllers/api/v1/registrations_controller.rb
class Api::V1::RegistrationsController < ApplicationController
  before_action :authenticate_user, except: [:create]
  
  # def create
  #   @user = User.new(user_params)
   

  #   # Set roles based on username and password
  #   if params[:user][:username] == "admin_username" && params[:user][:password] == "admin_password"
  #     @user.admin = true
  #   else
  #     @user.editor = true
  #   end

  #   if @user.save
  #     render json: { message: 'User registered successfully', user: @user }, status: :created
  #   else
  #     render json: { error: @user.errors.full_messages.join(', ') }, status: :unprocessable_entity
  #   end
  # end


  def create
    @user = User.new(user_params)

    # Check if the username and password match the admin user's credentials
    admin_username = "reagan"  # Assuming the admin username is "reagan"
    admin_password = "reagan12_password"  # Assuming the admin password is "reagan12_password"


    if params[:registration][:username] == admin_username && params[:registration][:password] == admin_password
      @user.admin = true
    else
      @user.editor = true
    end
  
    if @user.save
      render json: { success: 'User registered successfully', user: @user }, status: :created
    else
      render json: { error: @user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end

    # Rest of the code remains unchanged...
  end

  private

  # def user_params
  #   user_params = params.require(:registration).permit(:username, :email, :password, :password_confirmation, :profilePicture, :date_of_birth)
  # end

  def user_params
    params.require(:registration).permit(:username, :email, :password, :password_confirmation, :profilePicture, :date_of_birth)
  end
  
  

  # def user_params
  #   user_params = params.permit(:username, :email, :password, :password_confirmation, :profilePicture, :date_of_birth)
  # end
end
