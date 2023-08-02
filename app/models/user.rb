class User < ApplicationRecord
  attr_accessor :profile_picture
  has_secure_password
  has_many :contents, dependent: :destroy
  has_many :content_likes, dependent: :destroy
  has_many :content_views, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :posts

  before_save :serialize_followers_and_followings

  def followers
    read_attribute(:followers).split(',')
  end

  def followings
    read_attribute(:followings).split(',')
  end

  def add_follower(user_id)
    self.followers = (followers + [user_id.to_s]).uniq.join(',')
  end

  def remove_follower(user_id)
    self.followers = (followers - [user_id.to_s]).join(',')
  end

  def add_following(user_id)
    self.followings = (followings + [user_id.to_s]).uniq.join(',')
  end

  def remove_following(user_id)
    self.followings = (followings - [user_id.to_s]).join(',')
  end

  enum role: { regular: 0, moderator: 1, admin: 2 }

  validates :username, :date_of_birth, presence: true
  validate :validate_age

  def admin?
    role == 'admin'
  end

  def posts
    Post.where(user_id: id)
  end

  private

  def serialize_followers_and_followings
    self.followers = followers.join(',')
    self.followings = followings.join(',')
  end

  def validate_age
    return unless date_of_birth.present? && date_of_birth > 18.years.ago.to_date

    errors.add(:date_of_birth, 'You should be over 18 years old.')
  end
end
