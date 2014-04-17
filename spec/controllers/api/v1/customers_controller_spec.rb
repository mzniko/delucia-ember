require 'spec_helper'

describe Api::V1::CustomersController do
  describe 'GET methods' do
    it 'index' do
      @customers = FactoryGirl.create_list(:customer, 2)
      get :index
      expect(assigns(:customers).length).to eq(2)
      expect(assigns(:customers)[0].class).to be(Customer)
    end

    it 'show' do
      @customer = FactoryGirl.create(:customer)
      get :show, id: @customer.id
      expect(assigns(:customer).name).to eq('MyString')
    end
  end

  describe 'POST methods' do
    it 'creates a new customer' do
      @customer = FactoryGirl.attributes_for(:customer)
      expect{post :create, customer: @customer}.to change(Customer, :count).by(1)
    end
  end
end
