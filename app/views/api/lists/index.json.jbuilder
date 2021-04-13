@lists.each do |list|
    json.set! list do
        json.extract! list, :movie_id, :id
      #json.reviewIds []
    end
  end

