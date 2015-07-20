Template.navigation.helpers({
	view: function (id) {
		// debugger;
		var parentView =  'view-' + Template.instance().view.parentView.name.slice(9);
		console.log(parentView);
		return parentView
		
		// var taskIds = Template.instance().data.tasks;
		// return Tasks.find({'_id':{$in:taskIds}});
	}
});