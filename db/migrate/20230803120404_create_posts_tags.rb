class CreatePostsTags < ActiveRecord::Migration[7.0]
  def change
    create_table :posts_tags do |t|
      t.bigint :post_id
      t.bigint :tag_id
      t.timestamps
    end
    add_index :posts_tags, :post_id, unique: true
    add_index :posts_tags, :tag_id, unique: true
  end
end
