DeluciaEmber.IndexController = Ember.ArrayController.extend({
  actions: {
    addNewCustomer: function () {
      this.toggleProperty('addingNewCustomer');
    },
    saveNewCustomer: function () {
      var new_name = this.get('new_name');
      var new_email = this.get('new_email');

      var new_customer = this.store.createRecord('customer', {
        name: new_name,
        email: new_email
      });

      var self = this;
      new_customer.save().then(
        function () {
          self.set('new_name', '');
          self.set('new_email', '');
          self.toggleProperty('addingNewCustomer');
          self.transitionToRoute('/home')
        },
        function () { alert('Unable to save record');
        });
    },
    cancelNewCustomer: function () {
      this.set('new_name', '');
      this.set('new_email', '');
      this.toggleProperty('addingNewCustomer');
    },
    status: function () {
      this.transitionToRoute('/status');
    },
    home: function () {
      this.transitionToRoute('/home');
    }
  }
});
