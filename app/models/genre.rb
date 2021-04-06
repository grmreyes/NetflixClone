class Genre < ApplicationRecord

    validates :name, presence: true
  
    has_many :labels,
        class_name:  :Label,
        foreign_key: :genre_id        
  
end
