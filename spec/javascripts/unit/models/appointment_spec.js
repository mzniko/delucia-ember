//= require support/test_helper

module ('Appointments Model', {
  setup: function () {},
  teardown: function () {
    DeluciaEmber.reset();
  }
});

test('Has customer property', function () {
  has('Appointment', 'customer_id', 'number');
});

test('Has day property', function () {
  has('Appointment', 'day', 'date');
});

test('Has notes property', function () {
  has('Appointment', 'notes', 'string');
});
