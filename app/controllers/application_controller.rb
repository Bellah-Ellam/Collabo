class ApplicationController < ActionController::API
    # protect_from_forgery with: :null_session
    # before_action :authenticate_user!
  
    rescue_from JWT::DecodeError do
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
    include ActionController::Cookies
  
    # def hello_world
    #   session[:count] = (session[:count] || 0) + 1
    #   render json: { count: session[:count] }
    # end
end
