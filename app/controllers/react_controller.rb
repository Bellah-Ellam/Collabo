class ReactController < ActionController::API

  def index
    render file: "public/index.html"
  end
  
end