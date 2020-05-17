# frozen_string_literal: true

class HomeController < ApplicationController
  skip_before_action :authenticate_token, :delete_expired_token, :current_user, :active_user, :user_email_verified, only: %i[index login]
  
  def index    
  end

  def login; end

  def dashboard
    render '/dashboard'
  end

  def customer_dashboard
    render '/index'
  end

  def catch_404
    raise ActionController::RoutingError, params[:path]
  end
end
