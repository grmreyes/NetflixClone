json.movie do
    json.partial! '/api/movies/movie', movie: @movie
    #json.reviewIds @bench.reviews.pluck(:id)
end