DeluciaEmber.HomeController = Ember.ArrayController.extend({
  actions: {
    addNewAppointment: function () {
      this.toggleProperty('addingNewAppointment');
    },
    saveNewAppointment: function () {
      var new_day = this.get('new_day');
      var new_notes = this.get('new_notes');

      var new_appointment = this.store.createRecord('appointment', {
        customer: 'current_customer',
        day: new_day,
        notes: new_notes
      });

      var self = this;
      new_appointment.save().then(
        function () {
          self.set('new_day', '');
          self.set('new_notes', '');
          self.toggleProperty('addingNewAppointment');
        },
        function () { alert('Unable to save record');
        });
    },
    cancelNewAppointment: function () {
      this.set('new_day', '');
      this.set('new_notes', '');
      this.toggleProperty('addingNewAppointment');
    }
  }
})
