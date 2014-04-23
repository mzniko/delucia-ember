DeluciaEmber.StatusController = Ember.ArrayController.extend({
  actions: {
    appointmentsShowing: function () {
      this.toggleProperty('appointmentsShowing');
    },
    customersShowing: function () {
      this.toggleProperty('customersShowing');
    }
  }
});
