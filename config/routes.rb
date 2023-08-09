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
      # Posts routes
      post '/upload', to: 'posts#upload'
      mount ActionCable.server => '/cable'
      # Tags routes
      resources :tags, only: [:index, :new, :create, :show]
      # Notifications routes
      resources :notifications, only: [:index, :show, :update] do
        member do
          patch :mark_as_read
        end
        collection do
          patch :mark_multiple_as_read
          post :create_notification  # Add this line to include the new action
        end
      end
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