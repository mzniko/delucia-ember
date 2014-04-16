module('Customers integration', {
  setup: function () {
    DeluciaEmber.ApplicationAdapter = DS.FixtureAdapter;
    DeluciaEmber.Customer.FIXTURES = [
              {
                  id: 1,
                  name: 'Newguy McSouthEast',
                  email: 'McSouthEast@email.com'
              },
              {
                  id: 2,
                  name: 'Newgirl MacPearlDistrict',
                  email: 'MacPearlDistrict@email.com'
            }
          ]
  },
  teardown: function () {
    DeluciaEmber.reset();
  }
});

test('Customers index page', function () {
    visit('/customers');
    andThen(function () {
        var header_text = find('.customers_heading').text();
        equal(header_text, "Now in the Customers Index",
        'Expected "Now in the Customers Index", got: ' + header_text );
    });
});

test('Renders customers', function () {
    visit('/customers');
    andThen(function () {
        var customers_length = find('.customers_list li').length;
        equal(customers_length, 4,
        "Expected customers to contain 4 items, got: " + customers_length);
    });
});

test('Renders a single customer', function () {
    visit('/customers/1');
    andThen(function () {
        var customers_length = find('.customers_list li').length;
        equal(customers_length, 2,
        "Expected customers to contain 2 items, got: " + customers_length);
    });
});
