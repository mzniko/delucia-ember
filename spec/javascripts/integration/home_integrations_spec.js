module('Home integration', {
      setup: function () {
      DeluciaEmber.ApplicationAdapter = DS.FixtureAdapter;
      DeluciaEmber.Appointment.FIXTURES = [
              {
                  id: 1,
                  customer: 'Newguy McSouthEast',
                  day: '04/21/14',
                  notes: 'Stuff they did'
              },
              {
                  id: 2,
                  customer: 'Newgirl MacPearlDistrict',
                  day: '04/23/14',
                  notes: 'Stuff they did'
            }
          ]
    },
    teardown: function () {
      DeluciaEmber.reset();
    }
});

test('Renders Home page', function () {
  visit('/home');
  andThen(function () {
      var header_text = find('.home_heading').text();
      equal(header_text, "This is the customer Home page",
      'Expected "This is the customer Home page", got: ' + header_text );
  });
});

test('Renders list of personal appointments', function () {
  visit('/home');
  andThen(function () {
        var appointments_length = find('.appointments_list li').length;
        equal(appointments_length, 4,
        "Expected appointments to contain 4 items, got: " + appointments_length);
    });
});
