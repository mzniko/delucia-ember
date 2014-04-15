class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :day
      t.string :customer
      t.text :notes

      t.timestamps
    end
  end
end
