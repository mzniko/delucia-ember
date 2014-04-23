DeluciaEmber.AppointmentsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('appointment');
  }
});
