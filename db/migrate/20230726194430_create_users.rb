class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :name
      t.date :date_of_birth
      t.string :bio
      t.boolean :editor, default: true
      t.boolean :admin, default: false
      t.string :password_digest
      t.string :email,              null: false, default: ""
     



      t.timestamps
    end
  end
end
