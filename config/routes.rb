Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :content, only: [:index, :show, :create, :update, :destroy]
      post '/login', to: 'auth#login'
      get '/current_user', to: 'auth#show_current_user'
      post '/signup', to: 'registrations#create'
      delete '/logout', to: 'auth#logout'
    end
  end
    # Devise routes for user authentication
   devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
   }

 
  # Fallback route for handling client-side routing (e.g., React, Vue, etc.)
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

 # get '/content_comments', to: 'content#content_comments'
  # post '/signup', to: 'users#create'
  # get '/me', to: 'users#show'
 # post '/login', to: 'users/sessions#create' 
  # Endpoint to login and get the JWT token
 # delete '/logout', to: 'users/sessions#destroy'
  
 
end
