Tasks = new Mongo.Collection('tasks');

  Template.task.helpers({
    // tasks: [
    //   { text: "This is task 1" },
    //   { text: "This is task 2" },
    //   { text: "This is task 3" }
    // ]
    tasks: function () {
    	console.log('meow');
	      return Tasks.find({}, {sort: {createdAt: -1}});
	  }
  });




  Template.task.events({
    "submit .new-task": function (event) {
    
      var taskItem = event.target.text.value;

      Tasks.insert({
        text: taskItem,
        createdAt: new Date()//,
  //       owner: Meteor.userId(),
  //       username: Meteor.user().username
      });
        event.target.text.value = "";

      return false;
  //   },
  //   "change .hide-completed input": function(event) {
  //     Session.set("hideCompleted", event.target.checked);
    }
  });

  // Template.task.events({
  //   "click .toggle-checked": function() {
  //     Tasks.update(this._id, {$set: {checked: ! this.checked}});
  //   },
  //   "click .delete": function() {
  //     Tasks.remove(this._id);
  //   }
  // });
  // Accounts.ui.config({
  //   passwordSignupFields: "USERNAME_ONLY"
  // });


// Template.body.helpers({
//     tasks: function() {
//       if (Session.get('hideCompleted')) {
//         return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
//       } else {
//         return Tasks.find({}, {sort: {createdAt: -1}});
//       } 
//     },
//     hideCompleted: function () {
//       return Session.get("hideCompleted");
//     },
//     incompleteCount: function () {
//       return Tasks.find({checked: {$ne: true}}).count();
//     }
//   });