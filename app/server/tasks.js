Tasks = new Mongo.Collection('tasks');

Meteor.publish("tasks", function () {
	return Tasks.find();
});

Meteor.methods({
	setChecked: function (taskId) {
		Tasks.update(this._id, {$set: {checked: ! this.checked}});
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