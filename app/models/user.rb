class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
     # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    # devise :database_authenticatable, :registerable,
    # :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

    validates :name, :date_of_birth, presence: true
    validate :validate_age

    def admin?
        role == 'admin'
      end
    
      private
    
      def validate_age
        return unless date_of_birth.present? && date_of_birth > 18.years.ago.to_date
    
        errors.add(:date_of_birth, 'You should be over 18 years old.')
      end
  
end
