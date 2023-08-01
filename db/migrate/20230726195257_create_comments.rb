class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.references :user, null: false, foreign_key: TRUE
      t.references :content, null: false, foreign_key: TRUE
      # t.references :parent_comment, null: false, foreign_key: TRUE

      t.timestamps
    end
  end
end
