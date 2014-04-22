class SessionSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :day, :notes
end
