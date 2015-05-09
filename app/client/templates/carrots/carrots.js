

Template.carrotList.helpers({
	carrots: function () {
		return Carrots.find({}, {sort: {createdAt: -1}});
	},
	pullTaskList: function () {
		return Tasks.find({}, {sort: {createdAt: -1}});
	}
	
});

Template.carrot.helpers({
	task: function (id) {
		// return id;
		var relatedTasks = Tasks.findOne({_id: id});
			return relatedTasks.text;
	}
});

Template.carrotList.events({
	"submit .new-carrot": function(event) {
		var carrotReward = event.target.text.value;
		var associatedTask = $( ".taskSelect").val();

		Carrots.insert({
			carrot: carrotReward,
			createdAt: new Date(),
			owner: Meteor.userId(),
			tasks: associatedTask
		});
		return false;
	}
});