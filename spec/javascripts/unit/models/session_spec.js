//= require support/test_helper

module ('Sessions Model', {
  setup: function () {},
  teardown: function () {
    DeluciaEmber.reset();
  }
});

test('Has customer property', function () {
  has('Session', 'customer_id', 'number');
});

test('Has day property', function () {
  has('Session', 'day', 'date');
});

test('Has notes property', function () {
  has('Session', 'notes', 'string');
});
