class Api::V1::ContentController < ApplicationController
    load_and_authorize_resource
    before_action :authenticate_user!
    before_action :set_user
    before_action :set_conent, only: %i[show update destroy]

     # GET /content
     def index
        @content = Content.all
    
        render json: @content
      end
    
      # GET /content/1
      def show
        render json: @Content
      end
    
      # POST /content
      def create
        @Content = Content.new(Content_params)
    
        if @Content.save
          render json: @Content, status: :created, location: api_v1_Content_url(@Content)
        else
          render json: @Content.errors, status: :unprocessable_entity
        end
      end
    
      # PATCH/PUT /content/1
      def update
        if @Content.update(Content_params)
          render json: @Content
        else
          render json: @Content.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /content/1
      def destroy
        @Content.destroy
      end
    
      private
    
      # Use callbacks to share common setup or constraints between actions.
      def set_Content
        @Content = Content.find(params[:id])
      end
    
      def set_user
        @user = current_user
      end
    
      # Only allow a list of trusted parameters through.
      def Content_params
        params.require(:Content).permit(:title, :Content_type, :body, :status, )
      end
end
