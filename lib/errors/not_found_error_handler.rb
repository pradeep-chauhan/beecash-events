# frozen_string_literal: true

module Errors
  module NotFoundErrorHandler
    class UserNotFound < StandardError
      def http_status
        :not_found
      end

      def message
        'User not found'
      end
    end
  end
end
