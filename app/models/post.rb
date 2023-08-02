class Post < ApplicationRecord
    belongs_to :user
    serialize :liked_by, Array, default: []
    attribute :likes_count, :integer, default: 0
  end
  