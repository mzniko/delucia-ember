DeluciaEmber.SessionsShowRoute = Ember.Route.extend({
  model: function(params) {
      return this.store.find('session', params.session_id);
  }
});
