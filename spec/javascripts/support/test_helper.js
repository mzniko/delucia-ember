var routesTo = function (url, route_name) {
  visit(url);
  andThen(function () {
    var current_route = DeluciaEmber.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, route_name, 'Expected ' + route_name + ', got: ' + current_route);
  });
};

var has = function (model, property_name, type) {
  var property = DeluciaEmber[model].metaForProperty(property_name);
  equal(property.type, type);
  ok(property.isAttribute);
}
