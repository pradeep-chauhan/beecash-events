class EventForm
  include ActiveModel::Model

  attr_accessor :id, :title, :description, :address, :city, :state, :organizor, :start_date, :end_date, :seat_capacity, :created_at, :updated_at, :object

  validates :description, :address, :city, :state, :seat_capacity, :organizor, presence: true
  validates :title, presence:true, format: { with: /\A[a-zA-Z0-9\s]*\z/, message: 'should not contain special characters' }
  # validates :start_date, :end_date, presence: true, format: { with: /\A\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])\z/, message: "format should be like yyyy-mm-dd" }
  validate :end_date_validation
  validates :seat_capacity, numericality: { greater_than: 0 }

  def end_date_validation
    errors.add(:end_date, 'should be equal to or greater than start date') if start_date.to_date > end_date.to_date
  end

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