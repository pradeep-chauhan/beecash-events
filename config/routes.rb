Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  match "/app/*path", to: "home#index", via: :get

  namespace(:admin) do
    post 'login' => 'sessions#login'    
    delete 'logout' => 'sessions#logout'
    put '/forgot_password', to: 'sessions#forgot_password'
    put '/users/:reset_password_token/reset_password', to: 'users#reset_password'
    resources :users, only: %i[show create update index]
    resources :events, only: %i[show create update index]
  end

  namespace(:customer) do
    post 'login' => 'sessions#login'    
    delete 'logout' => 'sessions#logout'
    put '/forgot_password', to: 'sessions#forgot_password'
    put '/users/:reset_password_token/reset_password', to: 'users#reset_password'
    resources :users, only: %i[show create update index]
    post '/events/:id' => 'events#book'
    delete '/events/:id' => 'events#cancel'
    resources :events, only: %i[show index]
  end
end
