class BodyinfosController < ApplicationController

  def index
  end

  def show
    @bodyinfos = Bodyinfo.find(params[:id])
  end


  private
  def user_params
    params.require(:bodyinfo).permit(:date, :sex, :age, :height, :weight, user_id: [])
  end
end
