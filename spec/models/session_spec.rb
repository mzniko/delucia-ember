require 'spec_helper'

describe Customer do
  let (:session) {FactoryGirl.build_stubbed(:session)}

  subject { session }

  it { should respond_to :day}
  it { should respond_to :customer}
  it { should respond_to :notes}
end
