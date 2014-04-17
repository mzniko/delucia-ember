# For more information see: http://emberjs.com/guides/routing/

DeluciaEmber.Router.map ->
  @resource 'customers', ->
    @route 'show',
      path: '/:customer_id'
    @route 'new'
  @resource 'sessions', ->
    @route 'show',
      path: '/:session_id'
  @route 'status'
