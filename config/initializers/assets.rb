Rails.application.config.assets.precompile +=
%w( teaspoon-qunit.js support/*.js
 jquery.js jquery_ujs.js handlebars.js
 ember.js ember-data.js spec_helper.js
 unit/*.js integration/*.js models/*.js routes/*.js
 teaspoon-teaspoon.js controllers/*.js views/*.js )
