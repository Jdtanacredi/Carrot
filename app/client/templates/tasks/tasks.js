Tasks = new Mongo.Collection('tasks');

  Template.body.helpers({
    // tasks: [
    //   { text: "This is task 1" },
    //   { text: "This is task 2" },
    //   { text: "This is task 3" }
    // ]
    tasks: function () {
    	console.log('meow');
	      return Tasks.find({});
	  }
  });

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

  // Template.body.events({
  //   "submit .new-task": function (event) {
  //     var text = event.target.text.value;
  //     console.log('submit worked!');

  //     Tasks.insert({
  //       text: text,
  //       createdAt: new Date(),
  //       owner: Meteor.userId(),
  //       username: Meteor.user().username
  //     });

  //     event.target.text.value = "";

  //     return false;
  //   },
  //   "change .hide-completed input": function(event) {
  //     Session.set("hideCompleted", event.target.checked);
  //   }
  // });

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