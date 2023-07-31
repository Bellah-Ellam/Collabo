class AddLikesViewsCommentsToContents < ActiveRecord::Migration[7.0]
  def change
    add_column :contents, :likes_count, :integer, default: 0
    add_column :contents, :views_count, :integer, default: 0
    add_column :contents, :comments_count, :integer, default: 0
  end
end
