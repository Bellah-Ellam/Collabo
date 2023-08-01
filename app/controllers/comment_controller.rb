class Api::V1::CommentController < ApplicationController
        load_and_authorize_resource
        before_action :authenticate_user!
        before_action :set_user
        before_action :set_comment, only: %i[show update destroy]
      
        # GET /comment
        def index
          @comment = Comment.where(user: @user)
      
          render json: @comment
        end
      
        # GET /comment/1
        def show
          render json: @comment
        end
      
        # POST /comment
        def create
          @comment = Comment.new(comment_params)
          @comment.user = @user
      
          if @comment.save
            render json: @comment, status: :created, location: api_v1_comment_url(@comment)
          else
            render json: @comment.errors, status: :unprocessable_entity
          end
        end
      
        # PATCH/PUT /comment/1
        def update
          if @comment.update(comment_params)
            render json: @comment
          else
            render json: @comment.errors, status: :unprocessable_entity
          end
        end
      
        # DELETE /comment/1
        def destroy
          @comment.destroy
        end
      
        private
      
        # Use callbacks to share common setup or constraints between actions.
        def set_comment
          @comment = Comment.find(params[:id])
        end
      
        def set_user
          @user = current_user
        end
      
        # Only allow a list of trusted parameters through.
        def comment_params
          params.require(:comment).permit(:comment_date, :body,:user_id, :content_id)
        end
      end
end
