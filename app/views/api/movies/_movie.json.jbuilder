json.extract! movie, :id, :title, :description, :runtime, :rating, :year, :genres
json.photo_url url_for(movie.photo)
json.video_url url_for(movie.video_small)
