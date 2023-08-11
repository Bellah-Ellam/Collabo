class User < ApplicationRecord
  # attr_accessor :profile_picture
  validates :username, presence: true, length: { maximum: 20 }, uniqueness: true
  validates :email, presence: true, length: { maximum: 50 }, uniqueness: true
  has_secure_password
  has_many :posts
  has_many :notifications
  has_many :comments, dependent: :destroy

  has_many :followed_relationships, class_name: 'FollowersFollowing', foreign_key: 'follower_id', dependent: :destroy
  has_many :follower_relationships, class_name: 'FollowersFollowing', foreign_key: 'following_id', dependent: :destroy

  has_many :followed_users, through: :followed_relationships, source: :following
  has_many :followers, through: :follower_relationships, source: :follower

  has_and_belongs_to_many :followings,
                          class_name: 'User',
                          join_table: :followers_followings,
                          foreign_key: :follower_id,
                          association_foreign_key: :following_id

  def following?(user)
    followings.include?(user)
  end

  before_save :validate_age

  enum role: { regular: 0, moderator: 1, admin: 2 }

  validates :username, :date_of_birth, presence: true

  def admin?
    role == 'admin'
  end

  
  def increment_notifications_count!
    increment!(:notifications_count)
  end

  def decrement_notifications_count!
    decrement!(:notifications_count)
  end

  private

  def validate_age
    return unless date_of_birth.present? && date_of_birth > 18.years.ago.to_date

    errors.add(:date_of_birth, 'You should be 18 years old or older.')
  end
end