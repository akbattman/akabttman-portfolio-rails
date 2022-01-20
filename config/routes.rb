Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#home", as: :home
  
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'
  get 'further_learning', to: 'pages#further_learning'
  get 'projects', to: 'pages#projects'
  get 'shoutouts', to: 'pages#shoutouts'

  # resources :messages, only: [:new, :create]

  get "messages/new", to: "messages#new", as: :message_aaron
  post "messages", to: "messages#create"
end
