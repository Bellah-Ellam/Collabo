Rails.application.routes.draw do
  # ...

  namespace :api do
    namespace :v1 do
      # Authentication routes
      get '/users/search', to: 'users#search'
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
      resources :posts, only: [:index, :create, :update, :destroy, :show] do
        member do
          get :likes
          put :like
          get :all_comments
        end
        resources :comments, only: [:index, :create], param: :id
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

      #users
      resources :users, only: [:index, :show, :update, :destroy] do
        member do
          put :follow
          put :unfollow
          put :update_profile
          get :friends
          get :profile
          match :update_profile_picture, via: [:put, :patch]
          match :update_cover_picture, via: [:put, :patch]
          match :update_bio, via: [:put, :patch]
        end
      end

      # Comments routes
      resources :comments, only: [:index, :show, :create, :update, :destroy] do
        member do
          put :like_comment
          delete :unlike_comment
        end
      end

      # Route for the PrivateController
      get '/private/test', to: 'private#test'
      get '/private/auth_params', to: 'private#auth_params'

      # Fallback route for handling client-side routing (e.g., React, Vue, etc.)
      get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
    end
  end
end
