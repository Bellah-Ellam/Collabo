# test/integration/forgot_password_test.rb
require "test_helper"

class ForgotPasswordTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  test "user can request a password reset email" do
    # Assume a user exists in the database with the email 'user@example.com'
    post user_password_path, params: { user: { email: 'user@example.com' } }

    # Check if the response is successful (status code 200)
    assert_response :success

    # Check if the email was sent
    assert_not ActionMailer::Base.deliveries.empty?

    # You can also check the email content if needed
    email = ActionMailer::Base.deliveries.last
    assert_equal ['user@example.com'], email.to
    assert_equal 'Reset password instructions', email.subject
    assert_match 'Click the link below to reset your password', email.body.to_s
  end

  test "user cannot request a password reset with an invalid email" do
    post user_password_path, params: { user: { email: 'invalid_email@example.com' } }

    # Check if the response redirects back to the form (indicating an error)
    assert_response :unprocessable_entity

    # Check if the email was not sent
    assert ActionMailer::Base.deliveries.empty?
  end
end
