# frozen_string_literal: true

module Errors
  module ActiveUserErrorHandler
    class UserNotActive < StandardError
      def http_status
        :unauthorized
      end

      def message
        'User id not activated by admin'
      end
    end
  end
end
