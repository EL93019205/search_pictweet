class ApplicationController < ActionController::Base
  before_action :configure＿permitted＿parameters, if: :devise_controller?

  def configure＿permitted＿parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
end
