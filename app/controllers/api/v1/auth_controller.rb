class Api::V1::AuthController < ApplicationController
    def login
        user = User.find_by(email: params[:email])
    
        if user&.valid_password?(params[:password])
          token = JWT.encode({ user_id: user.id }, 'your_jwt_secret_key', 'HS256')
          render json: { token: token }
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
      end
    
      def logout
        current_user.denylist_jwt
        head :ok
      end
end
