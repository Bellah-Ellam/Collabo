# app/controllers/api/v1/registrations_controller.rb
class Api::V1::RegistrationsController < ApplicationController
  def create
    @user = User.new(user_params)

    # Set roles based on username and password
    if params[:user][:user_name] == "admin_username" && params[:user][:password] == "admin_password"
      @user.editor = true
      @user.admin = true
    else
      @user.editor = true
    end

    if @user.save
      render json: { message: 'User registered successfully', user: @user }, status: :created
    else
      render json: { error: @user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :user_name, :email, :date_of_birth,:bio , :password )
  end
end

  

  