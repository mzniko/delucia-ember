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

test('Show input for new customer', function () {
  visit('/').click('#new_customer');
  andThen(function () {
    var input_field = find('#new_name').length;
    ok(input_field == 1, 'Input field not found');
    var input_field = find('#new_email').length;
    ok(input_field == 1, 'Input field not found');
  });
});

test('Add a new customer', function () {
  visit('/').click('#new_customer');
  fillIn('#new_name', 'Newbie Boxer');
  fillIn('#new_email', 'newbieboxer@email.com');
  click('#save_new_customer');
  andThen(function () {
    visit('/customers');
    var name = find('.customers_list:contains("Newbie Boxer")').length;
    ok(name == 1, "Customer was not saved");
  });
});

test('Cancelling addition of new customer', function () {
  visit('/').click('#new_customer');
  andThen(function () {
    var name_field = find('#new_name').length;
    ok(name_field == 1, "Name field not found");
    click('#cancel_new_customer');
    andThen(function () {
      var new_button = find('#new_customer').length;
      ok(new_button == 1, "Did not transition back to new button");
    });
  });
});
