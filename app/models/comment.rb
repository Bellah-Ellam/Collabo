class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post, counter_cache: true
  attribute :liked_by, :integer, array: true, default: []
  attribute :likes_count, :integer, default: 0
  attribute :commented_by, :integer, array: true, default: []
  attribute :comments_count, :integer, default: 0
 
  validates :body, presence: true
end
