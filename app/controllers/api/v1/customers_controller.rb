class Api::V1::CustomersController < ApplicationController
  def index
    @customers = Customers.all
    render json: @customers
  end

  def show
    @customer = Customer.find(params[:id])
    render json: @customer
  end
end
