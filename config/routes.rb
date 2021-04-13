Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :movies, only: [:index, :show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :lists, only: [:index, :create, :destroy]
  end


  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


