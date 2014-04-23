DeluciaEmber.StatusRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('appointment');
  },
  model: function() {
    return this.store.find('customer');
  }
});
