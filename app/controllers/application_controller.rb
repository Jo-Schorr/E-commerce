class ApplicationController < ActionController::Base
  def path(method_name)
    raise ActionController::UrlGenerationError.new(message, routes, name, method_name)
  end

end
