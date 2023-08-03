module Api
    module V1
      class ContentsController < ApplicationController
        before_action :authenticate_api_v1_user!, except: [:index, :show]
        # authorize_resource 
  
        # GET /contents
        def index
          if params[:search].present?
            @contents = Content.joins(:tags, :categories)
                              .where("title LIKE ? OR body LIKE ? OR tags.name LIKE ? OR categories.name LIKE ?",
                                     "%#{params[:search]}%", "%#{params[:search]}%", "%#{params[:search]}%", "%#{params[:search]}%")
                              .distinct
          else
            @contents = Content.all
          end
      
          render json: @contents
        end
  
      # GET /contents/new
      def new
        @content = Content.new
        render json: @content
      end

      # POST /contents
      def create
        @content = current_user.contents.build(content_params)

        if @content.save
          render json: @content, status: :created, location: @content
        else
          render json: @content.errors, status: :unprocessable_entity
        end
      end

      # GET /contents/:id
      def show
        @content = Content.find(params[:id])
        render json: @content
      end

      # POST /contents/:id/like
      def like
        @content = Content.find(params[:id])
        if @content.content_likes.create(user_id: current_user.id)
          @content.update(content_likes_count: @content.content_likes_count + 1)
          render json: { message: 'Content liked successfully.' }
        else
          render json: { error: 'Failed to like the content.' }, status: :unprocessable_entity
        end
      end

      # POST /contents/:id/view
      def view
        @content = Content.find(params[:id])
        if @content.content_views.create(user_id: current_user.id)
          @content.update(content_views_count: @content.content_views_count + 1)
          render json: { message: 'Content viewed successfully.' }
        else
          render json: { error: 'Failed to view the content.' }, status: :unprocessable_entity
        end
      end

      # POST /contents/:id/comment
      def create_comment
        @content = Content.find(params[:id])
        @comment = @content.comments.build(comment_params)
        @comment.user = current_user

        if @comment.save
          @content.update(content_comments_count: @content.content_comments_count + 1)
          render json: { message: 'Comment created successfully.' }
        else
          render json: { error: 'Failed to create the comment.' }, status: :unprocessable_entity
        end
      end

      # GET /contents/:id/edit
      def edit
        @content = current_user.contents.find(params[:id])
        render json: @content
      end

      # PATCH /contents/:id
      def update
        @content = current_user.contents.find(params[:id])

        if @content.update(content_params)
          render json: @content
        else
          render json: @content.errors, status: :unprocessable_entity
        end
      end

      # DELETE /contents/:id
      def destroy
        @content = current_user.contents.find(params[:id])
        @content.destroy
        render json: { message: 'Content was successfully deleted.' }
      end

      private

      def comment_params
        params.require(:comment).permit(:body)
      end

      def content_params
        params.require(:content).permit(:title, :body, :content_type, :status)
      end
    end
  end
end