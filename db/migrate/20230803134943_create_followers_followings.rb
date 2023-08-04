class CreateFollowersFollowings < ActiveRecord::Migration[7.0]
  def change
    create_table :followers_followings do |t|
      t.references :follower, foreign_key: { to_table: :users }
      t.references :following, foreign_key: { to_table: :users }
     
      t.timestamps
    end
    add_index :followers_followings, [:follower_id, :following_id], unique: true
  end
end
