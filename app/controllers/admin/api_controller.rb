# frozen_string_literal: true

class Admin::ApiController < ApplicationController
  before_action :authorize!

  private

  def authorize!
    raise Errors::UnauthorizedErrorHandler::UserIsNotAuthorized unless Current.user.role == 'admin'
  end
end
