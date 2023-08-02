class User < ApplicationRecord

  has_secure_password
  has_many :contents, dependent: :destroy
  has_many :content_likes, dependent: :destroy
  has_many :content_views, dependent: :destroy
  has_many :comments, dependent: :destroy

  enum role: { regular: 0, moderator: 1, admin: 2 }
  

    validates :name, :date_of_birth, presence: true
    validate :validate_age
    validates :bio, length: { maximum: 500 }
   

    def admin?
        role == 'admin'
      end
     

      private
    
      def validate_age
        return unless date_of_birth.present? && date_of_birth > 18.years.ago.to_date
    
        errors.add(:date_of_birth, 'You should be over 18 years old.')
      end
  
end
