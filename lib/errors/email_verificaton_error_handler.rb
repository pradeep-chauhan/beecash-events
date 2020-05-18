# frozen_string_literal: true

module Errors
  module EmailVerificatonErrorHandler
    class UserNotVerified < StandardError
      def http_status
        :unauthorized
      end

      def message
        'User email not verified'
      end
    end
  end
end
