# frozen_string_literal: true

class Customer::EventsController < Customer::ApiController
  skip_before_action :authenticate_token, :delete_expired_token, :current_user, :authorize!, :active_user, :user_email_verified, only: %i[index]
  before_action :exists, except: %i[index]

  def index
    events = Event.all
    render json: { events: events.map { |event| EventPresenter.new(event)._show() } }, status: :ok
  end

  def show
    render json: { event: EventPresenter.new(@event)._show() }, status: :ok
  end

  def book
    @event.add_participant
    render json: { message:  'Successfully booked' }, status: :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  def cancel
    Current.user.events.where(@event.id).delete!
    render json: { message: 'Successfully cancelled' }, status: :ok
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
end
