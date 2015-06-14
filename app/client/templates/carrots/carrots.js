Meteor.subscribe("carrots");

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
 stores: [imageStore]
});


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
// MOVE TO SERVER. ONCE FUNCTIONING, MOVE TO ON SUBMIT
	'change .myFileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
						console.log(err);
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              'profile.image': '/cfs/files/images/' + fileObj._id
            };
            //Meteor.users.update(userId, {$set: imagesURL});
          }
        });
     });
   }
});


