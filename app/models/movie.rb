class Movie < ApplicationRecord

    validates :title, :description, :runtime, :rating, :year, presence: true
      


    has_many :labels,
        class_name:  :Label,
        foreign_key: :movie_id        
        
    has_many :listings,
        class_name:  :List,
        foreign_key: :movie_id  

    has_many :genres,
        through: :labels,
        source: :genre
        
    has_one_attached :photo
    has_one_attached :video
    has_one_attached :video_small
    
      
end
