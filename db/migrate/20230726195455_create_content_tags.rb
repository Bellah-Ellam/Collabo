class CreateContentTags < ActiveRecord::Migration[7.0]
  def change
    create_table :content_tags do |t|
      t.references :content, null: false, foreign_key: true
      # t.references :tag, null: false, foreign_key: TRUE

      t.timestamps
    end
  end
end
