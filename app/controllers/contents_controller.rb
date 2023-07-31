# app/controllers/contents_controller.rb

class ContentsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
  
    # GET /contents
    def index
      @contents = Content.all
    end
  
    # GET /contents/new
    def new
      @content = Content.new
    end
  
    # POST /contents
    def create
      @content = current_user.contents.build(content_params)
  
      if @content.save
        redirect_to @content, notice: 'Content was successfully created.'
      else
        render :new
      end
    end
  
    # GET /contents/:id
    def show
      @content = Content.find(params[:id])
    end

     # POST /contents/:id/like
  def like
    @content = Content.find(params[:id])
    if @content.content_likes.create(user_id: current_user.id)
      @content.update(likes_count: @content.likes_count + 1)
      redirect_to @content, notice: 'Content liked successfully.'
    else
      redirect_to @content, alert: 'Failed to like the content.'
    end
  end

  # POST /contents/:id/view
  def view
    @content = Content.find(params[:id])
    if @content.content_views.create(user_id: current_user.id)
      @content.update(views_count: @content.views_count + 1)
      redirect_to @content, notice: 'Content viewed successfully.'
    else
      redirect_to @content, alert: 'Failed to view the content.'
    end
  end

    # POST /contents/:id/comment
    def create_comment
        @content = Content.find(params[:id])
        @comment = @content.comments.build(comment_params)
        @comment.user = current_user
    
        if @comment.save
          @content.update(comments_count: @content.comments_count + 1)
          redirect_to @content, notice: 'Comment created successfully.'
        else
          redirect_to @content, alert: 'Failed to create the comment.'
        end
      end
  
    # GET /contents/:id/edit
    def edit
      @content = current_user.contents.find(params[:id])
    end
  
    # PATCH /contents/:id
    def update
      @content = current_user.contents.find(params[:id])
  
      if @content.update(content_params)
        redirect_to @content, notice: 'Content was successfully updated.'
      else
        render :edit
      end
    end
  
    # DELETE /contents/:id
    def destroy
      @content = current_user.contents.find(params[:id])
      @content.destroy
      redirect_to contents_url, notice: 'Content was successfully deleted.'
    end
  
    private
  
    
  def comment_params
    params.require(:comment).permit(:body)
  end
  
    def content_params
      params.require(:content).permit(:title, :body, :content_type, :status)
    end
  end
  