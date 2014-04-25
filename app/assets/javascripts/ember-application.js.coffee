#= require_self
#= require delucia_ember

window.DeluciaEmber = Ember.Application.create
  rootElement: '.ember-app'
  deviseSimpleAuth:
    userModelType: "customer"
