class RemoveCustomerFromAppointments < ActiveRecord::Migration
  def change
    remove_column :appointments, :customer
  end
end
