class ApplicationController < ActionController::API
        # before_action :authenticate_user!
  
    rescue_from JWT::DecodeError do
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
    
end
