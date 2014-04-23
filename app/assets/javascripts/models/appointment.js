DeluciaEmber.Appointment = DS.Model.extend({
     customer_id: DS.attr('number'),
     day: DS.attr('date'),
     notes: DS.attr('string')
});
