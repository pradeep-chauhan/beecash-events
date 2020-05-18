# frozen_string_literal: true

class UserPresenter
  attr_reader :user, :auth_token

  def initialize(user, auth_token = nil)
    @user = user
    @auth_token = auth_token
  end

  def _show(options = {})
    response = {
      id: user.id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      role: user.role,
      is_email_confirmed: user.is_email_confirmed,
      is_active: user.is_active
    }
    response[:auth_token] = auth_token.token if options[:auth_token_included]
    response[:reset_password_token] = user.reset_password_token if options[:reset_password_token_included]
    response[:reset_password_token_expire_at] = user.reset_password_token_expire_at if options[:reset_password_token_included]
    response[:confirmation_token] = user.confirmation_token if options[:confirmation_token_included]
    response
  end
end
