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
	tasks: function (id) {
		var taskIds = Template.instance().data.tasks;
console.log(taskIds);
		return Tasks.find({'_id':{$in:taskIds}});
	},
	task: function (id, carrotId) {
		var relatedTasks = "";
		console.log(id);
		relatedTasks = "";
	}
});

Template.carrotList.events({
	"submit .new-carrot": function(event) {
		var carrotReward = event.target.text.value;
		var associatedTasks = $(".associatedTasks:checked").map(function() {
			return this.value;
		}).get();
		Meteor.call("addCarrot", carrotReward, associatedTasks);
		return false;
	},
	"change .myFileInput": function(event, template) {
		console.log(event);
// NOT WORKING CAUSE EVENT IS A HUGE OBJECT. 
// NEXT STEPS: FIND NECESSARY DATA!
// http://stackoverflow.com/questions/17306385/meteor-rangeerror-maximum-call-stack-size-exceeded-on-keypress-event
				Meteor.call("addImage", event);
   }
});


