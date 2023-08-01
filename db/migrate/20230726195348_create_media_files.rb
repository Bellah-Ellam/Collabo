class CreateMediaFiles < ActiveRecord::Migration[7.0]
  def change
    create_table :media_files do |t|
      t.string :type
      t.string :url
      t.references :content, null: false, foreign_key: true

      t.timestamps
    end
  end
end
