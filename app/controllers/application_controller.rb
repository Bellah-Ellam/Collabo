class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

before_action :authorize

private

def authorize
  @current_user = User.find_by(id: session[:user_id])

  if !@current_user
    render json: { errors: ["Not authorized"] }, status: :unauthorized
  end
end

def render_unprocessable_entity_response(exception)
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
end
  end