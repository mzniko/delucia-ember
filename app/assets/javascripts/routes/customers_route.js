DeluciaEmber.CustomersRoute = Ember.Route.Extend({
  model: function() {
    return this.store.find('customer');
  }
});
