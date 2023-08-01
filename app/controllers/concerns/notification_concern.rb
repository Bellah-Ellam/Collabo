# app/controllers/concerns/notification_concern.rb
module NotificationConcern
    extend ActiveSupport::Concern
  
    included do
      def create_notification(recipient, action, content)
        Notification.create(recipient: recipient, action: action, content: content)
      end
    end
  end
  