module Api
  module V1
    class TagsController < ApplicationController
      before_action :authenticate_user, except: [:index, :show]

      # GET /tags
      def index
        @tags = Tag.all
        render json: @tags
      end

      # GET /tags/new
      def new
        @tag = Tag.new
      end

      # POST /tags
      def create
        @tag = Tag.new(tag_params)

        if @tag.save
          render json: @tag, status: :created, location: @tag
        else
          render json: @tag.errors, status: :unprocessable_entity
        end
      end

      # GET /tags/:id
      def show
        @tag = Tag.find(params[:id])
        render json: @tag
      end

      private

      def tag_params
        params.require(:tag).permit(:name)
      end
    end
  end
end
