class ApplicationController < ActionController::API
       
    
    attr_reader :current_user
  
    private
  
    def authenticate_user
      header = request.headers['Authorization']
      token = header.split.last if header
  
      begin
        decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
        user_id = decoded_token.first['user_id']
        @current_user = User.find(user_id)
      rescue JWT::DecodeError, ActiveRecord::RecordNotFound
        render json: { error: 'Invalid token' }, status: :unauthorized
      end
    end
  end
  
 
