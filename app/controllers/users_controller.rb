
class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    # Signup
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: {success: "Successful Signup"}, status: :created
    end
  
    # Get user by id 
    def show
      render json: @current_user
    end

    # Get current user
    def current_user
      user = User.find_by(id: session[:user_id])
    
      if user
        render json: user

      else
        render json: {error: "No user is logged in"}
      end

    end
  
    private
  
    def user_params
      params.permit(:email, :username, :profile_photo, :password, :password_confirmation)
    end
    
  end
>>>>>>> origin/sharon
