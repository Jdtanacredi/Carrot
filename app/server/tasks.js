Tasks = new Mongo.Collection('tasks');

Meteor.publish("tasks", function () {
	return Tasks.find();
});

Meteor.methods({
	addTask: function (text) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
			return false;
		}		
		Tasks.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			checked: false
		});
		return false;
	},
	deleteTask: function (taskId) {
	},
	setChecked: function (taskId, setChecked) {
		Tasks.update(taskId, {$set: {checked: setChecked}});
		// (query, {$inc: {flag: 1}}) LOOK INTO THIS:     http://stackoverflow.com/questions/10506878/how-to-toggle-a-boolean-field-in-an-array-element-in-mongodb
	}
});

Meteor.startup(function() {
  return Meteor.methods({
    removeAllTasks: function() {
			return Tasks.remove({});
				// CALL FUNCTION WITH Meteor.call('removeAllTasks'); in inspector console. Will remove all db tasks
    }
  });	
});