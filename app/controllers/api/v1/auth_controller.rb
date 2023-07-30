class Api::V1::AuthController < ApplicationController
  #before_action :authenticate_user!, only: [:show_current_user]
    def login
        user = User.find_by(email: params[:email])
    
        if user&.valid_password?(params[:password])
          token = JWT.encode({ user_id: user.id }, 'your_jwt_secret_key', 'HS256')
          render json: { token: token,user: @user }
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
      end

      
  def show_current_user
    render json: current_user
  end
    
      def logout
        current_user.denylist_jwt
        head :ok
      end
end
