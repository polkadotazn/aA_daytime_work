class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show

    @poke = Pokemon.find_by(id: params[:id])
  end

  def create
    @poke = Pokemon.new
  end

end
