module('Routing specs', {
     setup: function () { },
     teardown: function () {
     DeluciaEmber.reset();
    }
});

test('root route', function () {
    visit('/');
    andThen(function () {
      var current_route =
      DeluciaEmber.__container__.lookup('controller:application').currentRouteName;
      equal(current_route, 'index', 'Expected index got: ' + current_route);
    });
});

test('customers route', function () {
    visit('/contacts');
    andThen(function () {
      var current_route =
      DeluciaEmber.__container__.lookup('controller:application').currentRouteName;
      equal(current_route, 'contacts', 'Expected contacts got: ' + current_route);
    });
});

test('customers route', function () {
    visit('/sessions');
    andThen(function () {
      var current_route =
      DeluciaEmber.__container__.lookup('controller:application').currentRouteName;
      equal(current_route, 'sessions', 'Expected sessions got: ' + current_route);
    });
});
