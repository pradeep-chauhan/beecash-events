# frozen_string_literal: true

class Admin::EventsController < Admin::ApiController
  before_action :exists, only: %i[show update]

  def index
    events = Event.all
    render json: { data: events }, status: :ok
  end

  def show
    render json: { data: EventPresenter.new(@event)._show(attendee_included: true) }, status: :ok
  end

  def create
    event = EventForm.new(event_params)
    event.persist
    render json: { event: EventPresenter.new(event)._show }, status: :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  def update
    event = EventForm.new(event_params, params[:id])
    event.persist
    render json: { event: EventPresenter.new(event.object)._show(attendee_included: true) }, status: :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  def exists
    @event = params[:id].nil? ? Event.find_by(title: params[:title]) : Event.find(params[:id])
    render json: { error: 'Event not found' }, status: :not_found unless @event.present?
  rescue StandardError => e
    render json: { error: e.message }, status: :not_found
  end

  def event_params
    params.require(:event).permit(:title, :description, :address, :city, :state, :organizor, :start_date, :end_date, :seat_capacity)
  end
end
