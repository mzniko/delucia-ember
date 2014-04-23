DeluciaEmber.AppointmentsShowController = Ember.ObjectController.extend ({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    },
    cancelEditing: function() {
      this.set('isEditing', false);
    }
  }
});
