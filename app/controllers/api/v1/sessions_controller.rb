class Api::V1::SessionsController < ApplicationController
  before_action :set_session, only: [:show]

  def index
    @sessions = Session.all
    render json: @sessions
  end

  def show
    render json: @session
  end

  private

  def set_session
    @session = Session.find(params[:id])
  end
end