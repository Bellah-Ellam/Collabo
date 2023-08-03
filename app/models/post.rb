class Post < ApplicationRecord
  belongs_to :user
  attribute :liked_by, array: true, default: [] 
  attribute :likes_count, :integer, default: 0
end
