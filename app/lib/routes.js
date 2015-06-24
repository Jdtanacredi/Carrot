Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/taskList', {
  name: 'taskList',
  controller: 'TaskListController',
  action: 'action',
  where: 'client'
});

Router.route('/carrotList', {
	waitOn: function () {
 		return Meteor.subscribe('images')
 	},
  name: 'carrotList',
  controller: 'CarrotListController',
  action: 'action',
  where: 'client'//,
//	waitOn: function () {
// return Meteor.subscribe('images')
// }
});