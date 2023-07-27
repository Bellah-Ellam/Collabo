class CreateContentTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :content_templates do |t|
      t.string :name
      t.string :content
      t.references :content, null: false, foreign_key: TRUE

      t.timestamps
    end
  end
end
