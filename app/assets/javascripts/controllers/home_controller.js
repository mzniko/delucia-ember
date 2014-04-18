DeluciaEmber.HomeController = Ember.ArrayController.extend({
  actions: {
    addNewSession: function () {
      this.toggleProperty('addingNewSession');
    },
    saveNewSession: function () {
      var new_day = this.get('new_day');
      var new_notes = this.get('new_notes');

      var new_session = this.store.createRecord('session', {
        customer: 'current_customer',
        day: new_day,
        notes: new_notes
      });

      var self = this;
      new_session.save().then(
        function () {
          self.set('new_day', '');
          self.set('new_notes', '');
          self.toggleProperty('addingNewSession');
        },
        function () { alert('Unable to save record');
        });
    },
    cancelNewSession: function () {
      this.set('new_day', '');
      this.set('new_notes', '');
      this.toggleProperty('addingNewSession');
    }
  }
})
