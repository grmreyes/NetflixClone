class Api::ListsController < ApplicationController
    def create
      @list = List.new
      @list.movie_id = params[:movieId]
      @list.user_id = params[:userId]
      @list.save
      
      @lists = List.where(user_id: params[:userId])

      render :index
    end
  
    def index
      @lists = List.where(user_id: params[:userId])
      render :index
    end

    def destroy
      @list = List.find_by(user_id: params[:userId],movie_id: params[:movieId])
      @list.destroy
      @lists = List.where(user_id: params[:userId])
      render :index
    end
  end
  