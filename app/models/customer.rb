class Customer < ActiveRecord::Base
  has_many :sessions
end
