class Api::V1::CommentsController < ApplicationController
  include NotificationConcern
  before_action :authenticate_user, except: [:index, :show]
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_post, only: [:index, :create, :like_comment, :unlike_comment]

  # GET /api/v1/posts/:post_id/comments
  def index
    @comments = @post.comments
    render json: @comments
  end

  # GET /api/v1/posts/:id/comments/:id
  def show
    render json: @comment
  end

  # POST /api/v1/posts/:post_id/comments
  def create
    @comment = @post.comments.build(comment_params)
    @comment.user = current_user

    if @comment.save
      render json: @comment, status: :created, location: api_v1_comment_url(@comment)
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/comments/:id
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/comments/:id
  def destroy
    @comment.destroy
    render json: { message: "The comment has been deleted" }
  end

  # PUT /api/v1/posts/:post_id/comments/:comment_id/like
  def like_comment
    comment = @post.comments.find_by(id: params[:comment_id])

    if comment
      if comment.likes.include?(current_user.id)
        comment.likes.delete(current_user.id)
        action = "disliked"
      else
        comment.likes << current_user.id
        action = "liked"
      end

      if comment.save
        render json: { message: "The comment has been #{action}" }
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    else
      render json: { error: "Comment not found" }, status: :not_found
    end
  end

  # DELETE /api/v1/posts/:post_id/comments/:comment_id/unlike
  def unlike_comment
    comment = @post.comments.find_by(id: params[:comment_id])

    if comment
      if comment.likes.include?(current_user.id)
        comment.likes.delete(current_user.id)
        if comment.save
          render json: { message: "The comment has been unliked" }
        else
          render json: comment.errors, status: :unprocessable_entity
        end
      else
        render json: { error: "You haven't liked this comment" }, status: :unprocessable_entity
      end
    else
      render json: { error: "Comment not found" }, status: :not_found
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  # Only allow a list of trusted parameters through.
  # def comment_params
  #   params.require(:comment).permit(:comment_date, :body, :user_id, :content_id)
  # end
   def comment_params
    params.permit(:comment_date, :body, :user_id, :content_id)
  end

end
