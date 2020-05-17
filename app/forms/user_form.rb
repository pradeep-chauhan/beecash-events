# frozen_string_literal: true

class UserForm
  include ActiveModel::Model
  include UserAttributes

  attr_accessor :id, :name, :email, :gender, :role, :password, :password_digest, :reset_password_token, :reset_password_token_expire_at, :confirmation_token, :is_email_confirmed, :is_active, :created_at, :updated_at, :object

  validates :name, :email, :gender, :role, presence: true
  validates :gender, inclusion: { in: GENDERS }
  validate :unique_email_address
  validates :role, inclusion: { in: ROLES }

  def unique_email_address
    errors.add(:email, :taken) if User.where(email: email).where.not(id: id).any?
  end

  def initialize(option = {}, id = nil)
    @object = id.nil? ? User.new : User.find(id)
    @object.attributes = option
    super(@object.attributes)
  end

  def persist
    raise errors.full_messages.first unless valid?

    object.save!
  end
end
