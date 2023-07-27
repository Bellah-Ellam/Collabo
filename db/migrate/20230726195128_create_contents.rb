class CreateContents < ActiveRecord::Migration[7.0]
  def change
    create_table :contents do |t|
      t.string :title
      t.string :body
      t.string :content_type
      t.string :status
      t.references :user, null: false, foreign_key: TRUE

      t.timestamps
    end
  end
end
