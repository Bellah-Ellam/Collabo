class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: TRUE
      t.text :desc, limit: 500
      t.string :img
      t.integer :liked_by,  array: true, default: []
      t.integer :likes_count,  default: 0
  
      
      t.timestamps
    end

  add_column :posts, :likes, :text, array: true, default: []
end
end
