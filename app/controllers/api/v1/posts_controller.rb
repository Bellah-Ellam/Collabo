class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]
        before_action :set_post, only: [:show, :update, :destroy, :like, :comment, :like_comment, :unlike_comment]
        before_action :set_current_user
      
        #index
        def index
          @posts = Post.all
          render json: @posts
        end

         
        # GET /api/v1/posts/:id
        def show
          @post = Post.find(params[:id])
          render json: @post
        end

        
        # GET /api/v1/posts/profile/:username
        def profile
          @user = User.find_by(username: params[:username])
          @posts = @user.posts
          render json: @posts
        end
      
       # GET /api/v1/posts/timeline/:user_id
           def timeline
           @user = User.find(params[:user_id])
           @user_posts = @user.posts

       # Check if the user has any followings
         if @user.followings.present?
          @friend_posts = Post.where(user_id: @user.followings).order(created_at: :desc)
              @timeline_posts = (@user_posts + @friend_posts).uniq.sort_by(&:created_at).reverse
              render json: @timeline_posts
                 else
               # Handle the case when the user is not following anyone (timeline is empty)
                 render json: [], status: :ok
               end
          end

       # POST /api/v1/posts
       def create
        if current_user.nil?
          render json: { error: "You must be logged in to create a post" }, status: :unauthorized
          return
        end
        
        @post = current_user.posts.new(post_params)
    
        if @post.save
          render json: @post, status: :created
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end
      
        # PATCH/PUT /api/v1/posts/:id
        def update
          if @post.user_id == current_user.id
            if @post.update(post_params)
              render json: @post
            else
              render json: @post.errors, status: :unprocessable_entity
            end
          else
            render json: { error: "You can update only your post" }, status: :forbidden
          end
        end
      
        # DELETE /api/v1/posts/:id
        def destroy
          if @post.user_id == current_user.id
            @post.destroy
            render json: { message: "The post has been deleted" }
          else
            render json: { error: "You can delete only your post" }, status: :forbidden
          end
        end
       

# PUT /api/v1/posts/:id/like
def like
  if @post.liked_by.include?(current_user.id)
    render json: { error: "You already liked this post" }, status: :unprocessable_entity
    return
  end

  @post.likes << current_user.id
  @post.liked_by << current_user.id
  @post.likes_count += 1

  if @post.save
    render json: { message: "The post has been liked", likes_count: @post.likes_count }
  else
    render json: @post.errors, status: :unprocessable_entity
  end
end



  # POST /api/v1/posts/:id/comment
  def comment
    text = params[:text]

    if text.present?
      comment = @post.comments.build(user_id: current_user.id, text: text)

      if comment.save
        render json: comment, status: :created
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    else
      render json: { error: "Comment text can't be blank" }, status: :unprocessable_entity
    end
  end

  # PUT /api/v1/posts/:id/comments/:comment_id/like
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

  # DELETE /api/v1/posts/:id/comments/:comment_id/unlike
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

     
        

  def set_current_user
    header = request.headers['Authorization']
    token = header.split.last if header
    begin
      decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
      @current_user = User.find(decoded_token.first['user_id'])
    rescue JWT::DecodeError
      @current_user = nil
    end
  end
      
        private
      
        def set_post
          @post = Post.find(params[:id])
        end
      
        def post_params
          params.require(:post).permit(:desc, :img)
        end
        

end