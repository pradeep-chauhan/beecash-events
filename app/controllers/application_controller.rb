# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_token, :delete_expired_token, :current_user, :active_user, :user_email_verified
  rescue_from Errors::UnauthorizedErrorHandler::UserIsNotAuthorized, with: :render_error_response
  rescue_from Errors::NotFoundErrorHandler::UserNotFound, with: :render_error_response
  rescue_from Errors::EmailVerificatonErrorHandler::UserNotVerified, with: :render_error_response
  rescue_from Errors::ActiveUserErrorHandler::UserNotActive, with: :render_error_response

  def authenticate_token
    @auth_token = AuthToken.find_by(token: request.headers['Authorization'])
    render json: { error: 'Invalid token' }, status: :unauthorized unless @auth_token.present?
  end

  def delete_expired_token
    return unless @auth_token.expired?

    @auth_token.delete
    render json: { error: 'Token expired' }, status: :unauthorized
  end

  def current_user
    Current.user = AuthToken.find_by(token: request.headers['Authorization']).user
  end

  def render_error_response(exception)
    render json: { error: exception.message }, status: exception.http_status
  end

  def active_user
    raise Errors::ActiveUserErrorHandler::UserNotActive unless Current.user.is_active
  end

  def user_email_verified
    raise Errors::EmailVerificatonErrorHandler::UserNotVerified unless Current.user.is_email_confirmed
  end
end
