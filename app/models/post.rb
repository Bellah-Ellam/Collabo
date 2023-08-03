class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  attribute :liked_by, array: true, default: [] 
  attribute :likes_count, :integer, default: 0
end
