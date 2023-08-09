class Api::V1::NotificationsController < ApplicationController
  before_action :authenticate_user
  # GET api/v1/notifications
  def index
    notifications = current_user.notifications
    notification_count = current_user.notifications_count
    render json: { notifications: notifications, count: notification_count }, status: :ok
  end
  # PATCH api/v1/notifications/:id/mark_as_read
  def mark_as_read
    notification = current_user.notifications.find(params[:id])
    notification.update(read: true)
    current_user.decrement_notifications_count!
    render json: { message: 'Notification marked as read successfully.' }
  end
  # PATCH api/v1/notifications/mark_multiple_as_read
  def mark_multiple_as_read
    notification_ids = params[:notification_ids]
    if notification_ids.present?
      notifications = current_user.notifications.where(id: notification_ids)
      notifications.update_all(read: true)
      render json: { message: 'Selected notifications marked as read successfully.' }
    else
      render json: { error: 'No notification IDs provided.' }, status: :unprocessable_entity
    end
  end
  # POST api/v1/notifications/create_notification
  def create_notification
    action = params[:action_type]
    target_user_id = params[:target_user_id]
    notification_content = generate_notification_content(action, current_user.username)
    Notification.create(user_id: target_user_id, content: notification_content, read: false)
    # Update the notifications_count for the target user
    User.find(target_user_id).increment_notifications_count!
    render json: { message: 'Notification created successfully.' }
  end
  private
  def generate_notification_content(action, username)
    case action
    when 'like'
      "#{username} liked your post."
    when 'comment'
      "#{username} commented on your post."
    when 'change_profile_picture'
      "#{username} changed their profile picture."
    when 'update_profile'
      "#{username} updated their profile information."
    else
      "New notification"
    end
  end
end