# frozen_string_literal: true

class Event < ApplicationRecord
  has_many :participants
  has_many :users, through: :participants

  def add_participant
    Participant.create!(user_id: Current.user.id, event_id: self.id)
  end

  def cancel
    Current.user.events.where(id: self.id).delete!
  end
end