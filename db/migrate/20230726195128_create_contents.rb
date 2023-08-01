class CreateContents < ActiveRecord::Migration[7.0]
  def change
    create_table :contents do |t|
      t.string :title
      t.string :body
      t.string :content_type
      t.string :status
      t.bigint :user_id, null: false
      t.integer :content_likes_count, default: 0
      t.integer :content_comments_count, default: 0
      t.integer :content_views_count, default: 0
      t.integer :comments_count,default: 0
      t.index :user_id

      t.timestamps
    end
  end
end
