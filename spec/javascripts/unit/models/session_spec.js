//= require support/test_helper

module ('Sessions Model', {
  setup: function () {},
  teardown: function () {
    DeluciaEmber.reset();
  }
});

test('Has customer property', function () {
  has('Session', 'customer', 'string');
});

test('Has day property', function () {
  has('Session', 'day', 'string');
});

test('Has notes property', function () {
  has('Session', 'notes', 'string');
});
