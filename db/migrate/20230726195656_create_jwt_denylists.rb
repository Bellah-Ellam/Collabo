class CreateJwtDenylists < ActiveRecord::Migration[7.0]
  def change
    create_table :jwt_denylist do |t|
      t.string :jti, null: false, default: ''
      t.string :token, index: { unique: true }
      t.datetime :exp, null: false
    end
    add_index :jwt_denylist, :jti
  end
end
