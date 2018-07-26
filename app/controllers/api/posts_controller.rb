class Api::PostsController < ApplicationController

    def index
        @posts = City.find(params[city_id].posts.order(id: :desc))
        render json: @posts 
    end

    def show
        @
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def def_post
    end

end
