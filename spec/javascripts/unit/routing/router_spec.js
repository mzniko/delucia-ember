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

test('status route', function () {
    routesTo('/status', 'status');
});

test('home route', function () {
    routesTo('/home', 'home');
});

test('customers route', function () {
    routesTo('/customers', 'customers.index');
});

test('appointments route', function () {
    visit('/appointments');
    andThen(function () {
      var current_route =
      DeluciaEmber.__container__.lookup('controller:application').currentRouteName;
      equal(current_route, 'appointments.index', 'Expected appointments got: ' + current_route);
    });
});

test('individual customer', function () {
    routesTo('/customers/1', 'customers.show');
});

test('individual appointment', function () {
    routesTo('/appointments/1', 'appointments.show');
});
