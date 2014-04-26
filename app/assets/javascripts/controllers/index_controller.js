DeluciaEmber.IndexController = Ember.ArrayController.extend({
  new_name: null,
  new_email: null,
  new_password: null,

  actions: {
    addNewCustomer: function () {
      this.toggleProperty('addingNewCustomer');
    },
    saveNewCustomer: function () {
      var name = this.get('name');
      var email = this.get('email');
      var password = this.get('password');

      var customer = this.store.createRecord('customer', {
        name: name,
        email: email,
        password: password,
      });

      var self = this;
      customer.save().then(
        function () {
          self.set('name', '');
          self.set('email', '');
          self.set('password', '');
          self.toggleProperty('addingNewCustomer');
          self.transitionToRoute('/home')
        },
        function () { alert('Unable to save record');
        });
    },
    cancelNewCustomer: function () {
      this.set('name', '');
      this.set('email', '');
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
