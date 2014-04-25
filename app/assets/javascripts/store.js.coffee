# http://emberjs.com/guides/models/using-the-store/

DeluciaEmber.Store = DS.Store.extend
  # Override the default adapter with the `DS.ActiveModelAdapter` which
  # is built to work nicely with the ActiveModel::Serializers gem.
  adapter: '-active-model'

DS.RESTAdapter.reopen( namespace: "api/v1")

$ ->
  token = $("meta[name=\"csrf-token\"]").attr("content")
  $.ajaxPrefilter (options, originalOptions, xhr) ->
    xhr.setRequestHeader "X-CSRF-Token", token
