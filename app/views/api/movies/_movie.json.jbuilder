json.extract! movie, :id, :title, :description, :runtime, :rating, :year
json.photo_url url_for(movie.photo)
