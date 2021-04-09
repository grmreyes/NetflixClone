class Api::MoviesController < ApplicationController
  
    def index
      #if true #put conditions here
        #benches = benches.where(seating: seating_range)
      #end
      # @movies_action = Movie
      # .joins(:genres)
      # .where('genres.name = \'Action\'')

      @movies = Movie.all

      render :index
    end
  
    def show
        
      @movie = Movie.find(params[:id])
      render :show
    end
  
    
  end
  