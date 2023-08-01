class FallbackController < ApplicationController
    def index
        # React app index page
        render file: 'public/index.html'
      end
end
