class Api::V1::CustomersController < ApplicationController
  before_action :set_customer, only: [:show]

  def index
    @customers = Customer.all
    render json: @customers
  end

  def show
    render json: @customer
  end

  def create
    @customer = Customer.new(get_customer_params)
    if @customer.save
      render json: @customer
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  private

  def set_customer
    @customer = Customer.find(params[:id])
  end

  def get_customer_params
    params.require(:customer).permit([:name, :email, :password])
  end
end
