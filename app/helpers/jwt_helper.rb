module JwtHelper
    def generate_jwt_token(user_id)
      secret_key = ENV['Maddox@0748376744']
      payload = { user_id: user_id }
      JWT.encode(payload, secret_key, 'HS256')
    end
  end