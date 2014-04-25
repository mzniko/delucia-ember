Rails.application.routes.draw do
  devise_for :customers, :controllers => { sessions: "json_sessions"}
  devise_scope :customer do
    get "/sessions/current" => "ember_devise_simple_auth/sessions#show"
  end

  # devise_for :customers => {
  #       sessions: 'ember_devise_simple_auth/sessions',
  #       registrations: '/registrations'
  #     }

  namespace :api do
    namespace :v1 do
      resources :customers do
        resources :appointments
      end
      # devise_for :admin
    end
  end

  root to: 'assets#index'
  get 'assets/index'

end
