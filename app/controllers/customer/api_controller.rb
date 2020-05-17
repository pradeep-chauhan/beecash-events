# frozen_string_literal: true

class Customer::ApiController < ApplicationController
  before_action :authorize!

  private

  def authorize!
    p Current.user.role
    raise Errors::UnauthorizedErrorHandler::UserIsNotAuthorized unless Current.user.role == 'customer'
  end
end
