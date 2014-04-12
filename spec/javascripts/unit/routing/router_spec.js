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
      equal(current_route, '', 'Expected ****** got: ' + current_route);
    });
});
