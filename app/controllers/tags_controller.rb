# app/controllers/tags_controller.rb

class TagsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
  
    # GET /tags
    def index
      @tags = Tag.all
    end
  
    # GET /tags/new
    def new
      @tag = Tag.new
    end
  
    # POST /tags
    def create
      @tag = Tag.new(tag_params)
  
      if @tag.save
        redirect_to @tag, notice: 'Tag was successfully created.'
      else
        render :new
      end
    end
  
    # GET /tags/:id
    def show
      @tag = Tag.find(params[:id])
    end
  
    private
  
    def tag_params
      params.require(:tag).permit(:name)
    end
  end
  