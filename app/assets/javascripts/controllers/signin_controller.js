DeluciaEmber.SessionController = Ember.Controller.extend({
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
});
