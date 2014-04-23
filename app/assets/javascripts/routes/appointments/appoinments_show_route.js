DeluciaEmber.AppointmentsShowRoute = Ember.Route.extend({
  model: function(params) {
      return this.store.find('appointment', params.appointment_id);
  }
});
