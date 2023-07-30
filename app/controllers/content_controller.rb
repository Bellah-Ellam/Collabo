# app/controllers/api/v1/content_controller.rb
class Api::V1::ContentController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource
  before_action :set_user
  before_action :set_content, only: [:show, :update, :destroy]

  # GET /api/v1/content
  def index
    @content = Content.all
    render json: @content
  end

  # GET /api/v1/content/1
  def show
    render json: @content
  end

  # POST /api/v1/content
  def create
    @content = Content.new(content_params)

    if @content.save
      render json: @content, status: :created, location: api_v1_content_url(@content)
    else
      render json: @content.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/content/1
  def update
    if @content.update(content_params)
      render json: @content
    else
      render json: @content.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/content/1
  def destroy
    @content.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_content
    @content = Content.find(params[:id])
  end

  def set_user
    @user = current_user
  end

  # Only allow a list of trusted parameters through.
  def content_params
    params.require(:content).permit(:title, :content_type, :body, :status)
  end
end
