class ApplicationController < ActionController::Base
  # def after_sign_in_path_for(resource)
  #   bodyinfo_path(@user.id)
  # end
  

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [bodyinfo_attributes: [:sex] [:age] [:height] [:weight] ])
  end
  # def after_sign_out_path_for(resource)
  #   admin_root_path
  # end
end
