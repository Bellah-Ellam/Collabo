class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  # has_many :post_tags, dependent: :destroy
  # has_many :tags, through: :post_tags
  attribute :liked_by, :integer, array: true, default: []
  attribute :likes_count, :integer, default: 0
  end
  