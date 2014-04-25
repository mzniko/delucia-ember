class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :appointments
end
