class Api::MoviesController < ApplicationController
  
    def index
      movies = Movie.all
  
      #if true #put conditions here
        #benches = benches.where(seating: seating_range)
      #end
  
      @movies = movies
      render :index
    end
  
    def show
        
      #@bench = Bench.find(params[:id])
      render :show
    end
  
    
  end
  