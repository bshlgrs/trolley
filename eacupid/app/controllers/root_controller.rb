class RootController < ApplicationController
  before_action :authenticate_user!, only: [:home]
  layout "react-app", only: [:home]

  def root
    if user_signed_in?
      redirect_to "/home"
    end
  end

  def home
  end
end
