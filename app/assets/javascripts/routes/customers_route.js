DeluciaEmber.CustomersRoute = Ember.Route.Extend({
  model: function(controller) {
    return controller.store.find('customer');
  }
});
