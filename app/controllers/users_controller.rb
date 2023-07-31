# class UsersController < ApplicationController
#   before_action :authenticate_user!, only: :show

#   def index
#     users = User.all
#     render json: users, status: :ok
#   end

#   def show
#     if current_user
#       render json: current_user, status: :ok
#     else
#       render json: { error: "Not authorized" }, status: :unauthorized
#     end
#   end

#   def create
#     user = User.new(user_params)
#     if user.save
#       render json: user, status: :created
#     else
#       render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#     end
#   end

#   def destroy
#     user = User.find_by(id: params[:id])
#     user.destroy
#     head :no_content
#   end

#   private

#   def user_params
#     params.require(:user).permit(:name, :email, :password, :date_of_birth)
#   end
# end
