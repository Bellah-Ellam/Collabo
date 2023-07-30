class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :profile_photo
      t.string :password_digest
      t.boolean :is_admin, default: true
      t.timestamps
    end
  end
end

