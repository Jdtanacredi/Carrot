  Template.task.helpers({
    tasks: function () {
        console.log('currentUser: ' + Meteor.userId());
	      return Tasks.find({}, {sort: {createdAt: -1, owner: Meteor.userId()}});
	  }
  });

  Template.taskItem.helpers({
    owner: function (id) {
      console.log('id: ' + id);
      return Meteor.users.findOne(id).profile.name;
    }
  });

  Template.task.events({
    "submit .new-task": function (event) {
    
      var taskItem = event.target.text.value;

      Tasks.insert({
        text: taskItem,
        createdAt: new Date(),
        owner: Meteor.userId()
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