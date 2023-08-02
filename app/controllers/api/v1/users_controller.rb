class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user
  before_action :set_current_user
  before_action :set_user, only: [:show, :update, :destroy, :friends, :follow, :unfollow]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/:id
  def show
    render json: @user
  end

  # PUT /api/v1/users/:id
  def update
    if @user == @current_user || @current_user.admin?
      if params[:user][:password]
        @user.password = params[:user][:password]
      end

      if @user.update(user_params)
        render json: { message: "Account has been updated" }
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: { error: "You can update only your account!" }, status: :forbidden
    end
  end

  # DELETE /api/v1/users/:id
  def destroy
    if @current_user && (@user == @current_user || @current_user.admin?)
      @user.destroy
      render json: { message: "Account has been deleted" }
    else
      render json: { error: "You can delete only your account!" }, status: :forbidden
    end
  end

  # GET /api/v1/users/:id/friends
  def friends
    friends = User.where(id: @user.followings)
    friend_list = friends.map { |friend| { id: friend.id, username: friend.username, profilePicture: friend.profilePicture } }
    render json: friend_list
  end

  # PUT /api/v1/users/:id/follow
  def follow
    # ... (existing code)
  end

  # PUT /api/v1/users/:id/unfollow
  def unfollow
    # ... (existing code)
  end

  # ... (existing code)

  private

  def set_current_user
    # ... (existing code)
  end

  def set_user
    @user = User.find(params[:id])
  end

  # Only use @current_user instead of a separate method
  def user_params
    params.require(:user).permit(:user_name, :photo, :date_of_birth, :profile_picture)
  end
end
