Meteor.subscribe("carrots");

Template.carrotList.helpers({
	carrots: function () {
		return Carrots.find({owner: Meteor.userId()}, {sort: {createdAt: -1}});
	},
	pullTaskList: function () {
		return Tasks.find({owner: Meteor.userId()}, {sort: {createdAt: -1}});
	}
	
});

Template.carrot.helpers({
	task: function (id) {
//		var relatedTasks = Tasks.findOne({_id: id});
		
//		console.log(id);
		jQuery.each(id, function(index, taskId) {
			console.log(taskId);
		});
			return relatedTasks.text;
	}
});

Template.carrotList.events({
	"submit .new-carrot": function(event) {
		var carrotReward = event.target.text.value;
//		var associatedTasks = $( ".taskSelect").val();
		var associatedTasks = $(".associatedTasks:checked").map(function() {
			return this.value;
		}).get();
//		console.log(associatedTasks);
		Meteor.call("addCarrot", carrotReward, associatedTasks);
		return false;
	}
});