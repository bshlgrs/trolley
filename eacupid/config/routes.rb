Rails.application.routes.draw do
  root to: 'root#root'

  get "/home", to: 'root#home'

  resources :questions

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
