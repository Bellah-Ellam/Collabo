Rails.application.routes.draw do
  resources :posts
  namespace :api do
    namespace :v1 do
      # Authentication routes
      post '/login', to: 'auth#login'
      get '/current_user', to: 'auth#current_user'
      post '/signup', to: 'registrations#create'
      delete '/logout', to: 'auth#logout'

      # Custom routes for contents
      resources :contents, only: [:new, :create, :show, :update, :destroy] do
        post :like, on: :member
        post :view, on: :member
        post :create_comment, on: :member
      end

      # Posts routes
      resources :posts, only: [:index,:create, :update, :destroy, :show] do
        member do
          put :like
        end
      end
      get '/posts/timeline/:user_id', to: 'posts#timeline'
      get '/posts/profile/:username', to: 'posts#profile'

      #shares routes
      resources :shares, only: [:index, :create]

      # Index route for contents
      get '/contents', to: 'contents#index'

      mount ActionCable.server => '/cable'

      # Categories routes
      resources :categories, only: [:index, :show, :create]
      get '/categories/new', to: 'categories#new'

      # Tags routes
      resources :tags, only: [:index, :new, :create, :show]

      # Notifications routes
      resources :notifications, only: [:index]

      # Users routes
      resources :users, only: [:index, :show, :edit, :update, :destroy] do
        member do
          put :follow
          put :unfollow
        end
        get :friends, on: :member
      end

      # Comments routes
      resources :comments, only: [:index, :show, :create, :update, :destroy]

      # # Devise routes for user authentication
      # devise_for :users, controllers: {
      #   sessions: 'users/sessions',
      #   registrations: 'users/registrations',
      # }

      # Route for the PrivateController
      get '/private/test', to: 'private#test'
      get '/private/auth_params', to: 'private#auth_params'

      # Fallback route for handling client-side routing (e.g., React, Vue, etc.)
      get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
    end
  end
end
