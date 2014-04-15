module('Sessions integration', {
    setup: function () {
      DeluciaEmber.ApplicationAdapter = DS.FixtureAdapter;
      DeluciaEmber.Session.FIXTURES = [
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

test('sessions index page', function () {
    visit('/sessions');
    andThen(function () {
      var header_text = find('.sessions_heading').text();
      equal(header_text, "Now in the Sessions Index",
      'Expected "Now in the Sessions Index", got: ' + header_text );
    });
});

test('Renders sessions', function () {
    visit('/sessions');
    andThen(function () {
        var sessions_length = find('.sessions_list li').length;
        equal(sessions_length, 6,
        "Expected sessions to contain 2 items, got: " + sessions_length);
    });
});
