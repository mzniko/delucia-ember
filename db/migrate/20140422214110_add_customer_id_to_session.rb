class AddCustomerIdToSession < ActiveRecord::Migration
  def change
    add_column :sessions, :customer_id, :integer
  end
end
