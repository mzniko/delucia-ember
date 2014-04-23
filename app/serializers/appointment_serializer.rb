class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :day, :notes
end
