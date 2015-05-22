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
	setChecked: function (taskId) {
		Tasks.update(this._id, {$set: {checked: ! this.checked}});
		console.log(this);
	}
});


  Meteor.startup(function() {

    return Meteor.methods({

      removeAllTasks: function() {

        return Tasks.remove({});

      }

    });

  });

  // CALL ABOVE FUNCTION WITH

  // Meteor.call('removeAllTasks')