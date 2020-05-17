class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :organizor, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :seat_capacity, null: false

      t.timestamps
    end
  end
end
