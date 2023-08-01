class Api::V1::NotificationsController < ApplicationController
    before_action :authenticate_api_v1_user!
  
    def index
      @notifications = current_user.notifications.order(created_at: :desc)
      render json: @notifications
    end
  
    def mark_as_read
      @notification = current_user.notifications.find(params[:id])
      @notification.update(read: true)
      head :no_content
    end
end
