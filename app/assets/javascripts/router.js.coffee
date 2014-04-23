# For more information see: http://emberjs.com/guides/routing/

DeluciaEmber.Router.map ->
  @resource 'customers', ->
    @route 'show',
      path: '/:customer_id'
  @resource 'appointments', ->
    @route 'show',
      path: '/:appointment_id'
  @route 'status'
  @route 'home'
