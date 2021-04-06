class CreateLabels < ActiveRecord::Migration[5.2]
  def change
    create_table :labels do |t|
      t.integer :movie_id, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end
    add_index :labels, :movie_id
    add_index :labels, :genre_id
  end
end










