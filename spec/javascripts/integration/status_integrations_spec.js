module('Status integration', {
  setup: function () {
  },
  teardown: function () {}
});

test('Renders Status page', function () {
  visit('/status');
  andThen(function () {
      var header_text = find('.status_heading').text();
      equal(header_text, "This is the Status page",
      'Expected "This is the Status page", got: ' + header_text );
  });
});
