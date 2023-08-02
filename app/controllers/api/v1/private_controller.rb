class Api::V1::PrivateController < ApplicationController
    before_action :authenticate_user
    before_action :auth_params, only: [:auth_params]
    skip_before_action :authenticate_user!, only: [:auth_params]
  
    def test
      render json: {
        message: 'This is a secret message. You are seeing it because you have successfully logged in.'
      }
    end
  
    def auth_params
      @imagekitio = ImageKitIo.client
      @auth_params = @imagekitio.get_authentication_parameters
      render json: @auth_params
    end
  end
