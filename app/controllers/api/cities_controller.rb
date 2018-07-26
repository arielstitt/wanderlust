class Api::CitiesController < ApplicationController
  
  
  def index
    @cities = City.all
    render json: {
      cities: @cities
    }
  end

 
  def show
    @city = City.find(params[:id])
    @posts = @city.posts.order(id: :desc)
    render json: {
      city: @city,
      posts: @posts
    }
  end

  

end
