class DropEmailFromCustomers < ActiveRecord::Migration
  def change
    remove_column :customers, :email
  end
end
