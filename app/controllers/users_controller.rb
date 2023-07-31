class UsersController < ApplicationController
    before_action :authenticate_user!
  
    # GET /users/:id
    def show
      @user = User.find(params[:id])
    end
  
    # GET /users/:id/edit
    def edit
      @user = current_user
    end
  
    # PATCH /users/:id
    def update
      @user = current_user
  
      if @user.update(user_params)
        redirect_to @user, notice: 'Profile updated successfully.'
      else
        render :edit
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:user_name, :photo, :date_of_birth, :bio, :profile_picture)
    end
  end
  