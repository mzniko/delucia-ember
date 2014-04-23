class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :day
      t.string :customer
      t.text :notes

      t.timestamps
    end
  end
end
