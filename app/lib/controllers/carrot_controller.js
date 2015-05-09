CarrotListController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  	// this.subscribe()
  },

  action: function() {
    this.render('carrotList');
  }
});
