# frozen_string_literal: true

class Customer::VerificationController < Customer::ApiController
  skip_before_action :active_user, :user_email_verified
  skip_before_action :authenticate_token, :authorize!, :delete_expired_token, :current_user, only: :confirm_email
  before_action :exists, :authenticate_user_role, only: :confirm_email

  def verify_email
    Current.user.generate_confirmation_token
    render json: { user: UserPresenter.new(Current.user)._show(confirmation_token_included: true) }, status: :ok
  rescue StandardError => e
    render json: { errors: e.message }, status: :unprocessable_entity
  end

  def confirm_email
    @user.update!(is_email_confirmed: true, is_active: true)
    render json: { user: UserPresenter.new(@user)._show }, status: :ok
  rescue StandardError => e
    render json: { errors: e.message }, status: :unprocessable_entity
  end

  private

  def exists
    @user = User.find_by(confirmation_token: params[:confirmation_token])
    raise Errors::NotFoundErrorHandler::UserNotFound unless @user.present?
  rescue StandardError => e
    render json: { error: e.message }, status: :not_found
  end

  def authenticate_user_role
    raise Errors::UnauthorizedErrorHandler::UserIsNotAuthorized unless @user.role == 'customer'
  end
end
