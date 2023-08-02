class Api::V1::UsersController < ApplicationController
          before_action :authenticate_user!
      
        # GET /users
        def index
          @users = User.all
          render json: @users
        end
      
        # GET /users/:id
        def show
          @user = User.find(params[:id])
          render json: @user
        end
      
        # GET /users/:id/edit
        def edit
          @user = current_user
          render json: @user
        end
      
        # PATCH /users/:id
        def update
          @user = current_user
      
          if @user.update(user_params)
            render json: @user, notice: 'Profile updated successfully.'
          else
            render json: @user.errors, status: :unprocessable_entity
          end
        end
      
        private
      
        def user_params
          params.require(:user).permit(:user_name, :photo, :date_of_birth, :bio, :profile_picture)
        end
      end
      

