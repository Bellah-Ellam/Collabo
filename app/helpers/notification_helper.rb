module NotificationHelper
  def create_notification(user, message, notification_type, content = nil)
    notification = user.notifications.create(
      message: message,
      notification_type: notification_type
    )
    notification.update(content: content) if content.present?
  end
end