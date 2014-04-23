# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :appointment do
    day "MyString"
    customer "MyString"
    notes "MyText"
  end
end
