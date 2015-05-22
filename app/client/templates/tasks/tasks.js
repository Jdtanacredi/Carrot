Meteor.subscribe("tasks");

Template.task.helpers({
	tasks: function () {
			console.log('currentUser: ' + Meteor.userId());
			return Tasks.find({owner: Meteor.userId(), checked: {$ne: true}}, {sort: {createdAt: -1}});
	},
	completedTasks: function () {
		return Tasks.find({owner: Meteor.userId(), checked: {$ne: false}}, {sort: {createdAt: -1}});
	}
});

Template.taskItem.helpers({
	owner: function (id) {
		console.log('id: ' + id);
		return Meteor.users.findOne(id).profile.name;
	}
});

Template.task.events({
	"submit .new-task": function (event) {
		var taskItem = event.target.text.value;
		Meteor.call("addTask", taskItem);
		event.target.text.value = "";
		return false;		
//   },
//   "change .hide-completed input": function(event) {
//     Session.set("hideCompleted", event.target.checked);
	},
	"click .toggleComplete": function (event) {

			var thisclick = $(this).get(0);
			console.log(thisclick);
		return false;
	},
	"click .toggleComplete": function() {
		var thisclick = $(this).get(0);
		console.log(thisclick);
		Meteor.call("setChecked", this._id, ! this.checked);
	}


});

Meteor.methods({
	deleteTask: function (taskId) {
	},
	setChecked: function (taskId) {
		Tasks.update(this._id, {$set: {checked: ! this.checked}});
		console.log(this);
	}
});