Rails.application.routes.draw do
  resources :comments, only:[:index, :create, :destroy]
  resources :content, only:[:index,:show, :create, :destroy]
  resources :users, only:[:index,:show, :create, :destroy]

 # get '/content_comments', to: 'content#content_comments'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
