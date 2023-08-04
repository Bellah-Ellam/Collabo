# app/services/token_service.rb
class TokenService
    SECRET_KEY = Rails.application.secrets.secret_key_base
    EXPIRATION_TIME = 24.hours.to_i
  
    def self.generate_token(payload)
      payload[:exp] = Time.now.to_i + EXPIRATION_TIME # Token expiration time (24 hours from now)
      payload[:jti] = SecureRandom.uuid # Unique token identifier
      JWT.encode(payload, SECRET_KEY, 'HS256')
    end
  
    def self.verify_token(token)
      JWT.decode(token, SECRET_KEY, true, { algorithm: 'HS256' }).first
    rescue JWT::ExpiredSignature
      nil # Token has expired
    rescue JWT::DecodeError
      nil # Invalid token
    end
  end
  