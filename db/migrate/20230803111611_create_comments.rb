class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :liked_by,  array: true, default: []
      t.integer :likes_count,  default: 0
      t.integer :commented_by,  array: true, default: []
      t.integer :comments_count, default: 0
      t.references :user, null: false, foreign_key: true
      t.references :post, null: false, foreign_key: true
    

      t.timestamps
    end
  end
end
