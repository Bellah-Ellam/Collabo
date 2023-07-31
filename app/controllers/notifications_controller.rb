class NotificationsController < ApplicationController
    before_action :authenticate_user!
  
    def index
      @notifications = current_user.notifications.order(created_at: :desc)
      current_user.update(unread_notifications: 0) # Mark all notifications as read
    end
  end
  
