class Api::V1::CategoriesController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
  
    # GET /categories
    def index
      @categories = Category.all
      render json: @categories
    end
  
    # GET /categories/new
    def new
      @category = Category.new
    end
  
    # POST /categories
    def create
      @category = Category.new(category_params)
  
      if @category.save
        redirect_to @category, notice: 'Category was successfully created.'
      else
        render :new
      end
    end
  
    # GET /categories/:id
    def show
      @category = Category.find(params[:id])
    end
  
    private
  
    def category_params
      params.require(:category).permit(:category_name)
    end
end
  


