class Api::V1::NotificationsController < ApplicationController
  before_action :authenticate_user

  # GET api/v1/notifications
  def index
    notifications = current_user.notifications
    render json: notifications, status: :ok
  end

  # PATCH api/v1/
  def mark_as_read
    notification = current_user.notifications.find(params[:id])
    notification.update(read_status: true)
    render json: { message: 'Notification marked as read successfully.' }
  end

end