class SessionSerializer < ActiveModel::Serializer
  attributes :id, :day, :customer, :notes
end