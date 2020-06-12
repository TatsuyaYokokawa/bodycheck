class BodyinfosController < ApplicationController

  def index
    @bodyinfos = Bodyinfo.all
  end

  def show
    @bodyinfos = Bodyinfo.find(params[:id])
  end

  def new
    @bodyinfo = Bodyinfo.new
    @bodyinfo.user << current_user
  end

  def create
    Bodyinfo.create(user_params)
    redirect_to root_path
  end

  def update
    @bodyinfo = Bodyinfo.find(params[:id])
    @bodyinfo.update(user_params)
    redirect_to post_path(bodyinfo.id)
  end

  private
  def user_params
    params.require(:bodyinfo).permit(:sex, :age, :height, :weight, user_ids: [])
  end
end
