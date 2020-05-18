# frozen_string_literal: true

class EventPresenter
  attr_reader :event

  def initialize(event)
    @event = event
  end

  def _show(options = {})
    response = {
      id: event.id,
      title: event.title,
      description: event.description,
      address: event.address,
      city: event.city,
      state: event.state,
      organizor: event.organizor,
      start_date: event.start_date,
      end_date: event.end_date,
      seat_capacity: event.seat_capacity
    }
    response[:attendee] = event.users.size if options[:attendee_included]
    response[:users] = event.users if options[:users_included]
    response
  end
end
