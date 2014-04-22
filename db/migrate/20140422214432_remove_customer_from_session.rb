class RemoveCustomerFromSession < ActiveRecord::Migration
  def change
    remove_column :sessions, :customer
  end
end
