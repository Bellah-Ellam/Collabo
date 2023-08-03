class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user
  before_action :set_current_user
  before_action :set_user, only: [:show, :update, :destroy, :friends, :follow, :unfollow]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /api/v1/users/me
  def me
    render json: current_user, only: [:id, :username, :profilePicture, :coverPicture, :bio, :followers, :following]
  end

  # PUT /api/v1/users/me
  def update_profile
    if current_user.update(profile_params)
      render json: { message: "Profile updated successfully" }
    else
      render json: { error: "Error updating profile" }, status: :unprocessable_entity
    end
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
    # Implement logic to follow a user
  end

  # PUT /api/v1/users/:id/unfollow
  def unfollow
    # Implement logic to unfollow a user
  end

  #GET /api/v1/users/search?query=search_term
  def search
    search_query = params[:query]

    # Implement the logic to search for users and posts in the database
    users = User.where("username ILIKE ?", "%#{search_query}%")
    posts = Post.where("content ILIKE ?", "%#{search_query}%")

    # Combine the results from users and posts into a single array
    search_results = { users: users, posts: posts }

    render json: search_results
  end

  # Custom route to get user profile with posts, likes, and comments
  #GET /api/v1/users/profile/:username
  def profile
    user = User.find_by(username: params[:username])

    if user
      posts = user.posts
      render json: {
        user: user.as_json(only: [:id, :username, :profilePicture, :coverPicture, :bio, :followers, :following]),
        posts: posts.as_json(include: { likes: { include: :user }, comments: { include: :user } })
      }
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end


 # PATCH /api/v1/users/:id/update_profile_picture
def update_profile_picture
  user = User.find(params[:id])

  if user.update(profile_picture: params[:profile_picture])
    render json: { message: "Profile picture updated successfully" }
  else
    render json: { error: "Error updating profile picture" }, status: :unprocessable_entity
  end
end


# PATCH /api/v1/users/1/update_cover_picture
def update_cover_picture
  user = User.find(params[:id]) # Find the user by ID

  if user == current_user || current_user.admin?
    if user.update(cover_picture: params[:cover_picture])
      render json: { message: "Cover picture updated successfully" }
    else
      render json: { error: "Error updating cover picture" }, status: :unprocessable_entity
    end
  else
    render json: { error: "You can update only your account or you need admin privileges!" }, status: :forbidden
  end
end

## PATCH /api/v1/1/users/update_bio
def update_bio
  user = User.find(params[:id]) # Find the user by ID

  if user == current_user || current_user.admin?
    if user.update(bio: params[:bio])
      render json: { message: "Bio updated successfully" }
    else
      render json: { error: "Error updating bio" }, status: :unprocessable_entity
    end
  else
    render json: { error: "You can update only your bio or you need admin privileges!" }, status: :forbidden
  end
end

  private

  def set_current_user
    # Implement logic to set current user based on authentication token
    # This method depends on how you have implemented authentication in your application
  end

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:user_name, :photo, :date_of_birth, :profile_picture)
  end

  def profile_params
    params.require(:user).permit(:profilePicture, :coverPicture, :bio)
  end
end
