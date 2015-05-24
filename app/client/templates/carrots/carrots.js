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
	task: function (id, carrotId) {
		var relatedTasks = "";
		console.log(id);
//		var relatedTasks = Tasks.findOne({_id: id});
		jQuery.each(id, function(index, taskId) {
			var testing = Tasks.findOne({_id: taskId});
			relatedTasks +="<li>" + testing.text + "</li>";
		});
		$('.carrotTasks-' + carrotId).append(relatedTasks);
		relatedTasks = "";
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