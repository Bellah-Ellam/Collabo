class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :photo
      t.date :doB
      t.string :role
      t.string :password
      # t.string :email,              null: false, default: ""
      #t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      #t.string   :reset_password_token
      #t.datetime :reset_password_sent_at

      ## Rememberable
     # t.datetime :remember_created_at



      t.timestamps
    end
    #add_index :users, :email,                unique: true
    #add_index :users, :reset_password_token, unique: true
  end
end
