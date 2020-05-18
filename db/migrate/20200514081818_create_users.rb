class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :gender, null: false
      t.string :role, null: false
      t.boolean :is_active, null: false, default: false
      t.string :password_digest
      t.string :confirmation_token
      t.boolean :is_email_confirmed, null: false, default: false
      t.string :reset_password_token
      t.datetime :reset_password_token_expire_at

      t.timestamps
    end
  end
end
