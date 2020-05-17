class EventForm
  include ActiveModel::Model

  attr_accessor :id, :title, :description, :address, :city, :state, :organizor, :start_date, :end_date, :seat_capacity

  validates :title, :description, :address, :gender, :city, :state, :start_date, :organizor, presence: true
  validates :end_date, presence: true, date: { after_or_equal_to:  :start_date}
  validates :seat_capacity, presence: true, 

  def initialize(option = {}, id = nil)
    @object = id.nil? ? Event.new : Event.find(id)
    @object.attributes = option
    super(@object.attributes)
  end

  def persist
    raise errors.full_messages.first unless valid?
    object.save!
  end
end