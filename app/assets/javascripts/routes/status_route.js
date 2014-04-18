DeluciaEmber.StatusRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('session');
  },
  model: function() {
    return this.store.find('customer');
  }
});
