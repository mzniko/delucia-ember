require 'spec_helper'

describe Api::V1::CustomersController do
  describe 'GET methods' do
    it 'index' do
      @customers = FactoryGirl.create_list(:customer, 2)
      get :index
      expect(assigns(:customers).length).to_be 2
      expect(assigns(:contacts)[0].class).to_be Customer
    end
  end
end
