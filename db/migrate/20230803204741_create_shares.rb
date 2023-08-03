class CreateShares < ActiveRecord::Migration[7.0]
  def change
    create_table :shares do |t|
      t.string :share_text, null: false
      t.string :photo_video
      t.string :tag
      t.string :location
      t.string :feelings
      
      t.timestamps
    end
  end
end
