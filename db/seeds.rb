# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Customer.create(name: 'Customer1', email: 'Customer1@mail.com')
Customer.create(name: 'Customer2', email: 'Customer2@mail.com')
Session.create(day: 'MyDate', customer_id: 1, notes: 'MyNotes')
Session.create(day: 'MyDate2', customer_id: 2, notes: 'MyNotes2')
