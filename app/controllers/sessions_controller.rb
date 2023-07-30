class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    # Login
    def create
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: {success: "Logged in successfully"}, status: :ok
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end
  
    # Logout
    def destroy
      session.delete :user_id
      render json: {message: "Logout successful"}, status: :ok
    end
    
end