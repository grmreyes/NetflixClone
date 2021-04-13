# @lists.each do |list|
#     json.set! list.id do
#         json.extract! list, :movie_id
#       #json.reviewIds []
#     end
#   end

  @lists.each do |list|
    json.set! list.id, list.movie_id
  end

