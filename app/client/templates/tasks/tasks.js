Meteor.subscribe("tasks");

Template.task.helpers({
	tasks: function () {
//			console.log('currentUser: ' + Meteor.userId());
			return Tasks.find({owner: Meteor.userId(), checked: {$ne: true}}, {sort: {createdAt: -1}});
			//return Tasks.find({owner: Meteor.userId(), checked: 0}, {sort: {createdAt: -1}});
	},
	completedTasks: function () {
		return Tasks.find({owner: Meteor.userId(), checked:  {$ne: false}}, {sort: {createdAt: -1}});
	}
});

Template.taskItem.helpers({
	owner: function (id) {
//		console.log('id: ' + id);
		return Meteor.users.findOne(id).profile.name;
	},
	carrotImage: function(id) {
		console.log(id);
//		return Carrots.find({'id':{$in:taskIds}});
	}
});

Template.task.events({
	"submit .new-task": function (event) {
		var taskItem = event.target.text.value;
		Meteor.call("addTask", taskItem);
		event.target.text.value = "";
		return false;
	},
	"click .toggleComplete": function (event) {
		console.log(this);
		var thisclick = $(this).get(0);
		Meteor.call("setChecked", this._id, ! this.checked);
	}
});

Meteor.methods({
	deleteTask: function (taskId) {
	}//,
//	setChecked: function (taskId) {
//		Tasks.update(this._id, {$set: {checked: ! this.checked}});
//		console.log(this);
//	}
});