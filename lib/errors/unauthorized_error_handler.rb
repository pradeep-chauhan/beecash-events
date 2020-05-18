# frozen_string_literal: true

module Errors
  module UnauthorizedErrorHandler
    class UserIsNotAuthorized < StandardError
      def http_status
        :unauthorized
      end

      def message
        'You are not authorized to perform this action.'
      end
    end
  end
end
