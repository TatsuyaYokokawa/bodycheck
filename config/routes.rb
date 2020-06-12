Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations', }

  root to: 'bodyinfos#index'
   resources :bodyinfos, only: [:index, :new, :create, :edit, :update]
   post "/" => "bodyinfos#create"

  end
