class Notification < ApplicationRecord
    belongs_to :user

    # Optional association if the notification is related to specific content
    belongs_to :content, optional: true
end
