require 'spec_helper'

describe Api::V1::AppointmentsController do
  describe 'GET methods' do
    it 'index' do
      @appointments = FactoryGirl.create_list(:appointment, 3)
      get :index
      expect(assigns(:appointments).length).to eq(3)
      expect(assigns(:appointments)[0].class).to be(Appointment)
    end

    it 'show' do
      @appointment = FactoryGirl.create(:appointment)
      get :show, id: @appointment.id
      expect(assigns(:appointment).customer_id).to eq(1)
    end
  end

  describe 'POST methods' do
    it 'creates a new appointment' do
      @appointment = FactoryGirl.attributes_for(:appointment)
      expect{post :create, appointment: @appointment}.to change(Appointment, :count).by(1)
    end
  end
end
