class User < ApplicationRecord
    # has_many :bookings, dependent: :destroy
    # has_many :properties, through: :bookings
    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true

end
