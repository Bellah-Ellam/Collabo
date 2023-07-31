Rails.application.routes.draw do
<<<<<<< HEAD
  namespace :api do
    namespace :v1 do
      resources :content, only: [:index, :show, :create, :update, :destroy]
      post '/login', to: 'auth#login'
      get '/current_user', to: 'auth#show'
      post '/signup', to: 'registrations#create'
      delete '/logout', to: 'auth#logout'
    end
  end

  resources :contents 
  resources :categories
  resources :tags
  resources :notifications, only: [:index]
  resources :users, only: [:show, :edit, :update]
  resources :content, only: [:index, :show, :create, :update, :destroy]
  resources :contents do
    member do
      post 'like', to: 'contents#like'
      post 'view', to: 'contents#view'
      post 'comment', to: 'contents#create_comment'
    end
  end
=======
  resources :comments, only:[:index, :create, :destroy]
  resources :content, only:[:index, :show, :create, :destroy]
  # resources :users, only:[:show]

 # get '/content_comments', to: 'content#content_comments'

  post "/signup", to: "users#create"
  get "/current_user", to: "users#current_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'
>>>>>>> origin/sharon

    # Devise routes for user authentication
   devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
   }

 
  # Fallback route for handling client-side routing (e.g., React, Vue, etc.)
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
 
end
