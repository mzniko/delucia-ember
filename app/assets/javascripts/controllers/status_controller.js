DeluciaEmber.StatusController = Ember.ArrayController.extend({
  actions: {
    sessionsShowing: function () {
      this.toggleProperty('sessionsShowing');
    },
    customersShowing: function () {
      this.toggleProperty('customersShowing');
    }
  }
});
