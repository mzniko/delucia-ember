//= require support/test_helper

module ('Customers Model', {
  setup: function () {
  },
  teardown: function () {
    DeluciaEmber.reset();
  }
});

test('Has name property', function () {
  var name = DeluciaEmber.Customer.metaForProperty('name');
  equal(name.type, 'string');
  ok(name.isAttribute);
});

test('Has email property', function () {
  has('Customer', 'email', 'string');
});

