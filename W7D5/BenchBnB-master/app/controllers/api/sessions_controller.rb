class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login(user)
    else
      flash[:errors] = ["Invalid credentials"]
    end
  end

  def destroy
    if logged_in?
      logout
      render {}
    else
      flash[:errors] = ["No one logged in"], 404
    end
  end
end
