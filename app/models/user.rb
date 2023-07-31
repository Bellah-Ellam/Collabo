class User < ApplicationRecord
  has_many :contents, dependent: :destroy
  has_many :content_likes, dependent: :destroy
  has_many :content_views, dependent: :destroy
  has_many :comments, dependent: :destroy

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
   

    validates :name, :date_of_birth, presence: true
    validate :validate_age
    validates :bio, length: { maximum: 500 }
    validates :profile_picture, format: { with: /\Ahttps?:\/\//, allow_blank: true }

    def admin?
        role == 'admin'
      end

      def invalidate_jwt(jti, expiration_time)
        if expiration_time.present? && expiration_time.is_a?(Numeric)
          # Calculate the time remaining until the token expiration
          time_remaining = expiration_time - Time.now.to_i
    
          if time_remaining.positive?
            # Add the token to the denylist with the remaining time until expiration
            JwtDenylist.create!(jti: jti, exp: expiration_time)
          else
            # The token has already expired, no need to add it to the denylist
          end
        else
          # The token does not have a valid expiration time, do not add it to the denylist
        end
      end
    
      def jwt_token_invalid?(jti)
        JwtDenylist.exists?(jti: jti)
      end

      private
    
      def validate_age
        return unless date_of_birth.present? && date_of_birth > 18.years.ago.to_date
    
        errors.add(:date_of_birth, 'You should be over 18 years old.')
      end
  
end
