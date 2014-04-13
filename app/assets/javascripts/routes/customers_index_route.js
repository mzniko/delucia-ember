DeluciaEmber.CustomersIndexRoute = Ember.Route.Extend({
  model: function () {
    return this.store.findAll('customer');
  }
});
