class Api::V1::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show]

  def index
    @appointments = Appointment.all
    render json: @appointments
  end

  def show
    render json: @appointment
  end

  def create
    @appointment = Appointment.new(get_appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def get_appointment_params
    params.require(:appointment).permit([:customer_id, :day, :notes])
  end
end
