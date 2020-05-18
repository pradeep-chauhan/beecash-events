# frozen_string_literal: true

class BeecashEventsMailer < ApplicationMailer
  default from: BeecashEvents.credentials[:smtp_email]

  def send_reset_password_email(user)
    @username = user.email
    @reset_password_email = BeecashEvents.credentials[:host_url] + '/reset-password#' + user.reset_password_token
    mail(to: @username, subject: 'Reset Password')
  end

  def send_registration_confirmation_email(user)
    @user_email = user.email
    @user_name = user.name
    @confrmation_email_url = BeecashEvents.credentials[:host_url] + '/verify-email#' + user.confirmation_token
    mail(to: @user_email, subject: 'Registration Confirmation')
  end
end
