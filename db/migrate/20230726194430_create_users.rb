class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, limit: 20, unique: true
      t.string :email, null: false, limit: 50, unique: true
      t.string :password_digest, null: false
      t.string :profilePicture, default: ""
      t.string :coverPicture, default: ""
      t.date :date_of_birth
      t.integer :relationship
      t.string :bio, limit: 50
      t.string :desc, limit: 50
      t.string :city, limit: 50
      t.string :from, limit: 50
      t.integer :notifications_count, default: 0
      t.integer :followed_by, array: true, default: []
      t.integer :followers_count, default: 0
      t.integer :unfollowed_by, array: true, default: []
      t.integer :following_count, default: 0
      t.integer :followers, array: true, default: []
      t.integer :followings, array: true, default: []
      t.boolean :editor
      t.boolean :admin, default: false
    
      t.timestamps
    end
  end
end