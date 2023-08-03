class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.string :body
      t.references :user, null: false, foreign_key: true
      t.references :content, null: false, foreign_key: true

      t.timestamps
    end
  end
end
