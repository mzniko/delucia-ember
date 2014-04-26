#= require_self
#= require delucia_ember

window.DeluciaEmber = Ember.Application.create
  rootElement: '.ember-app'
  deviseSimpleAuth:
    userModelType: "customer"
    deviseSignInPath: "api/v1/customers/sign_in"
    deviseSignOutPath: "api/v1/customers/sign_out"

$ ->
  token = $("meta[name=\"csrf-token\"]").attr("content")
  $.ajaxPrefilter (options, originalOptions, xhr) ->
    xhr.setRequestHeader "X-CSRF-Token", token
