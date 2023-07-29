Rails.application.routes.draw do
  resources :comments, only:[:index, :create, :destroy]
  resources :content, only:[:index,:show, :create, :destroy]
  resources :users, only:[:index, :destroy]


   # Devise routes for user authentication
   devise_for :users, controllers: {
    sessions: 'sessions',
    registrations: 'users'
  }

 
  # Fallback route for handling client-side routing (e.g., React, Vue, etc.)
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

 # get '/content_comments', to: 'content#content_comments'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # route to test your configuration
 
end
