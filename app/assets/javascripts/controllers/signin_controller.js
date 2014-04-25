DeluciaEmber.SessionController = Ember.Controller.extend({
  signIn: function() {
      var controller = this;
      return Ember.$.post('api/v1/customers/sign_in.json',
        {
          // customer:
          // {
            email: this.get('email'),
            password: this.get('password')
          // }
        },
        function(data) {
          location.reload();
        },
        'json'
      ).fail(function() {
        alert("Sign in failed!");
      }
      );
    }
});
