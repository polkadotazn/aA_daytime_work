Rails.application.routes.draw do
  get 'static_pages/root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end

  root to: 'static_pages#root'
end
