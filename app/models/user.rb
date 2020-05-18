# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :auth_tokens
  has_many :participants
  has_many :events, through: :participants
  validates :password, presence: true, length: { minimum: 6 }, if: -> { password.present? }
  before_create :set_default, if: -> { role == 'admin' || role == 'customer' }
  before_update :clear_auth_tokens, :clear_reset_password_token, if: -> { password_digest_changed? }
  after_update :trigger_confirmation_email, if: -> { previous_changes.keys.include?('confirmation_token') && (role != 'admin') }
  after_update :trigger_reset_password_email, if: -> { previous_changes.keys.include?('reset_password_token') && reset_password_token }
  after_save :generate_confirmation_token, if: -> { previous_changes.keys.include?('email') && (role != 'admin') }

  def generate_reset_password_token
    update!(reset_password_token: SecureRandom.urlsafe_base64(8), reset_password_token_expire_at: 1.days.from_now)
  end

  def reset_password_token_expired?
    reset_password_token_expire_at < Time.now
  end

  def clear_auth_tokens
    AuthToken.where(user_id: id).delete_all
  end

  def clear_reset_password_token
    self.reset_password_token = nil
    self.reset_password_token_expire_at = nil
  end

  def generate_confirmation_token
    update!(confirmation_token: SecureRandom.urlsafe_base64(8), is_email_confirmed: false)
  end

  private

  def set_default
    self.is_email_confirmed = true if role == 'admin'
    self.is_active = true
  end

  def trigger_reset_password_email
    BeecashEventsMailer.send_reset_password_email(self).deliver_now
  end

  def trigger_confirmation_email
    BeecashEventsMailer.send_registration_confirmation_email(self).deliver_now
  end
end
