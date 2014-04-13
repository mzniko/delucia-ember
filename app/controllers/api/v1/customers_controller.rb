class Api::V1::CustomersController < ApplicationController
  def index
    @customers = Customers.all
    render json: @customers
  end
end
