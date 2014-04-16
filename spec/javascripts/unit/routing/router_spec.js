//= require support/test_helper

module('Routing specs', {
     setup: function () {},
     teardown: function () {
     DeluciaEmber.reset();
    }
});

test('root route', function () {
    routesTo('/', 'index');
});

test('customers route', function () {
    routesTo('/customers', 'customers');
});

test('sessions route', function () {
    visit('/sessions');
    andThen(function () {
      var current_route =
      DeluciaEmber.__container__.lookup('controller:application').currentRouteName;
      equal(current_route, 'sessions', 'Expected sessions got: ' + current_route);
    });
});

test('individual customer', function () {
    routesTo('/customers/1', 'customers.show');
});

test('individual session', function () {
    routesTo('/sessions/1', 'sessions.show');
});
