module('Appointments integration', {
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

test('appointments index page', function () {
    visit('/appointments');
    andThen(function () {
      var header_text = find('.appointments_heading').text();
      equal(header_text, "Now in the Appointments Index",
      'Expected "Now in the Appointments Index", got: ' + header_text );
    });
});

test('Renders appointments', function () {
    visit('/appointments');
    andThen(function () {
        var appointments_length = find('.appointments_list li').length;
        equal(appointments_length, 6,
        "Expected appointments to contain 6 items, got: " + appointments_length);
    });
});

test('Renders a single appointment', function () {
    visit('/appointments/1');
    andThen(function () {
        var appointments_length = find('.appointments_list li').length;
        equal(appointments_length, 3,
        "Expected appointments to contain 3 items, got: " + appointments_length);
    });
});
