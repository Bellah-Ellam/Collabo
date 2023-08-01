class ApplicationController < ActionController::API
        #  before_action :authenticate_user!
        def authenticate_user!
          header = request.headers['Authorization']
          token = header.split.last if header
          begin
            decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
            @current_user_id = decoded_token.first['user_id']
          rescue JWT::DecodeError
            render json: { error: 'Invalid token' }, status: :unauthorized
          end
        end
  
  end
