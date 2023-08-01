class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :category_name
      t.references :content, null: false, foreign_key: true

      t.timestamps
    end
  end
end
