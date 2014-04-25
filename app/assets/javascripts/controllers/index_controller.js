DeluciaEmber.IndexController = Ember.ArrayController.extend({
  new_name: null,
  new_email: null,
  new_password: null,

  actions: {
    addNewCustomer: function () {
      this.toggleProperty('addingNewCustomer');
    },
    saveNewCustomer: function () {
      var new_name = this.get('new_name');
      var new_email = this.get('new_email');
      var new_password = this.get('new_password');

      var new_customer = this.store.createRecord('customer', {
        name: new_name,
        email: new_email,
        password: new_password,
      });

      var self = this;
      new_customer.save().then(
        function () {
          self.set('new_name', '');
          self.set('new_email', '');
          self.set('new_password', '');
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
    },
    signIn: function() {
      var controller = this;
      return Ember.$.post('/customers/sign_in.json',
        {
          user:
          {
            email: this.get('sign_in_email'),
            password: this.get('sign_in_password')
          }
        },
        function(data) {
          location.reload();
        },
        'json'
      ).fail(function() {
        alert("sign in failed!");
      }
      );
    }
  }
});
