class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
    else
      flash[:errors] = @user.errors.full_messages, 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
