ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

class ActiveSupport::TestCase
  # ...
  include Devise::Test::IntegrationHelpers
  # ...
end