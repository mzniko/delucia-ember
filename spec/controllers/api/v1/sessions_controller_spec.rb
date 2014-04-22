require 'spec_helper'

describe Api::V1::SessionsController do
  describe 'GET methods' do
    it 'index' do
      @sessions = FactoryGirl.create_list(:session, 3)
      get :index
      expect(assigns(:sessions).length).to eq(3)
      expect(assigns(:sessions)[0].class).to be(Session)
    end

    it 'show' do
      @session = FactoryGirl.create(:session)
      get :show, id: @session.id
      expect(assigns(:session).customer).to eq('MyString')
    end
  end

  describe 'POST methods' do
    it 'creates a new session' do
      @session = FactoryGirl.attributes_for(:session)
      expect{post :create, session: @session}.to change(Session, :count).by(1)
    end
  end
end
