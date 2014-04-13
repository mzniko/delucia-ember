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
        var contacts_length = find('.contacts_list li').length;
        equal(contacts_length, 2,
        "Expected customers to contain 2 items, got: " + contacts_length);
    });
});
