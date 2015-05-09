Tasks = new Mongo.Collection('tasks');


  Meteor.startup(function() {

    return Meteor.methods({

      removeAllTasks: function() {

        return Tasks.remove({});

      }

    });

  });