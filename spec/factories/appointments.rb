# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :appointment do
    day "MyString"
    customer_id "1"
    notes "MyText"
  end
end
