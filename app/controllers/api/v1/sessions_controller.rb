class Api::V1::SessionsController < ApplicationController
  before_action :set_session, only: [:show]

  def index
    @sessions = Session.all
    render json: @sessions
  end

  def show
    render json: @session
  end

  def create
    @session = Session.new(get_session_params)
    if @session.save
      render json: @session
    else
      render json: @session.errors, status: :unprocessable_entity
    end
  end

  private

  def set_session
    @session = Session.find(params[:id])
  end

  def get_session_params
    params.require(:session).permit([:customer, :day, :notes])
  end
end
