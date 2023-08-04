class JwtService
    SECRET_KEY = ENV['Maddox@0748376744']  # Replace with your actual secret key
  
    def self.generate_token(user_id)
      payload = { user_id: user_id }
      JWT.encode(payload, SECRET_KEY, 'HS256')
    end
  
    def self.decode_token(token)
      JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256').first
    end
  end