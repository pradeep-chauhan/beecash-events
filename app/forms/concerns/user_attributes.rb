# frozen_string_literal: true

module UserAttributes
  extend ActiveSupport::Concern
  ROLES = %w[admin customer].freeze
  GENDERS = %w[male female].freeze
end
