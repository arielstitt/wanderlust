class Api::PostsController < ApplicationController

    
    def index
        @posts = City.find(params[:city_id]).posts.order(id: :desc)
        render json: @posts
        
    end

    def show
       
        @city_name = City.find(params[:city_id]).name
        @post = Post.find(params[:id])
        render json: {
            content: @post,
            city_name: @city_name
        }

    end

    def create
        @city = City.find(params[:city_id])
        @post = @city.posts.create(post_params)
       
        render json: {
            post: @post
        }
    end

    def update
       @post = Post.find(params[:id])
       @post.update!(post_params)
        render json: {
            post: @post
        }
    end

    def destroy
        @post = Post.find(params[:id])
       @post.destroy  
    end  
    
    private

    def def_post
        @post = Post.find(params[:id])
    end


    def post_params
        params.require(:post).permit(:title, :image, :content, :city_id)
    end

    

end
