class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.string :message
      t.string :type

      t.references :user, null: false, foreign_key: TRUE
      t.timestamps
    end
  end
end
