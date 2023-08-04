class Api::V1::SharesController < ApplicationController
    # before_action :authenticate_user

    def create
        @share = Share.new(share_params)
        if @share.save
            render json: {share: @share, success:"Content shared successfully"}, status: :created
        else
            render json: { error: 'Error sharing content' }, status: :unprocessable_entity
        end
    end

  private

  def share_params
    params.permit(:share_text, :photo_video, :tag, :location, :feelings)
  end
end
