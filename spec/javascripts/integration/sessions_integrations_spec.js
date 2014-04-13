module('Sessions integration', {
   setup: function () {},
   teardown: function () {
     DeluciaEmber.reset();
   }
});

 test('sessions index page', function () {
     visit('/sessions');
     andThen(function () {
         var header_text = find('.sessions_heading').text();
         equal(header_text, "Now in the Sessions Index", 'Expected "Now in the Sessions Index", got: ' + header_text );
     });
 });
