Rails.application.routes.draw do
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
  resources :users, only: [:index, :show, :edit, :update]
  resources :content, only: [:index, :show, :create, :update, :destroy]
  resources :contents do
    member do
      post 'like', to: 'contents#like'
      post 'view', to: 'contents#view'
      post 'comment', to: 'contents#create_comment'
    end
  end

    # Devise routes for user authentication
   devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
   }

 
  # Fallback route for handling client-side routing (e.g., React, Vue, etc.)
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
 
end
