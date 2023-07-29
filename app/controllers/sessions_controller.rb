class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])
    if user&.valid_password?(params[:user][:password])
      sign_in user
      render json: user, status: :ok
    else
      render json: { errors: ["Invalid email or password"] }, status: :unauthorized
    end
  end

  def destroy
    if user_signed_in?
      sign_out current_user
      head :no_content
    else
      render json: { errors: ["Unauthorized"] }, status: :unauthorized
    end
  end
end
