require 'spec_helper'

describe Customer do
  let (:customer) {FactoryGirl.build_stubbed(:customer)}

  subject { customer }

  it { should respond_to :name}
  it { should respond_to :email}
end
