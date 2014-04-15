Rails.application.routes.draw do
  root to: 'assets#index'
  get 'assets/index'

  namespace :api do
    namespace :v1 do
      resources :customers
      resources :sessions
    end
  end

end
