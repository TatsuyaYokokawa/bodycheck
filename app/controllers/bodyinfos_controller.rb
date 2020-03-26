class BodyinfosController < ApplicationController

  def index
  end

  def show
    @bodyinfos = Bodyinfo.find(params[:id])
  end

  def new
    @bodyinfo = Bodyinfo.new
    @bodyinfo.user << current_user
  end

  def create
    @bodyinfo = Bodyinfo.new(user_params)
    if @bodyinfo.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  private
  def user_params
    params.require(:bodyinfo).permit(:date, :sex, :age, :height, :weight)
  end
end
