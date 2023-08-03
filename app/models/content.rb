class Content < ApplicationRecord
    belongs_to :user
    has_many :content_categories, dependent: :destroy
    has_many :categories, through: :content_categories
  
    has_many :content_tags, dependent: :destroy
    has_many :tags, through: :content_tags

    
    has_many :content_likes, dependent: :destroy
    has_many :content_views, dependent: :destroy
    has_many :comments, dependent: :destroy
end
