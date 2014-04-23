require 'spec_helper'

describe Appointment do
  let (:Appointment) {FactoryGirl.build_stubbed(:appointment)}

  subject { appointment }

  it { should respond_to :day}
  it { should respond_to :customer}
  it { should respond_to :notes}
end
