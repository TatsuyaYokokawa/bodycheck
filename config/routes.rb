Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations', }

  root to: 'bodyinfos#index'
   resources :bodyinfos, only: [:show, :index]
end
