# frozen_string_literal: true

class Customer::UsersController < Customer::ApiController
  skip_before_action :active_user, :user_email_verified
  skip_before_action :authenticate_token, :delete_expired_token, only: %i[reset_password create]
  skip_before_action :current_user, :authorize!, only: %i[reset_password create]
  before_action :exists, only: %i[show reset_password update]
  before_action :authenticate_user_role, only: %i[reset_password]
  before_action :reset_password_token_valid, only: %i[reset_password]

  def show
    render json: { user: UserPresenter.new(@user)._show }, status: :ok
  end

  def create
    user = UserForm.new(user_params)
    user.persist
    render json: { user: UserPresenter.new(user)._show }, status: :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  def update
    user = UserForm.new(user_params, params[:id])
    user.persist
    render json: { user: UserPresenter.new(user)._show }, status: :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  def reset_password
    @user.update!(user_params)
    render json: { user: UserPresenter.new(@user)._show }, status: :ok
  rescue StandardError => e
    render json: { errors: e.message }, status: :unprocessable_entity
  end

  private

  def exists
    @user = params[:id].nil? ? User.find_by(reset_password_token: params[:reset_password_token]) : User.find(params[:id])
    render json: { error: 'User not found' }, status: :not_found unless @user.present?
  rescue StandardError => e
    render json: { error: e.message }, status: :not_found
  end

  def authenticate_user_role
    raise Errors::UnauthorizedErrorHandler::UserIsNotAuthorized unless @user.role == 'customer'
  end

  def reset_password_token_valid
    render json: { error: 'Reset Password Url has expired' }, status: :unauthorized if @user.reset_password_token_expired?
  end

  def user_params
    params.require(:user).permit(:name, :email, :gender, :is_active, :role, :phone_number, :password, :event_ids)
  end
end
