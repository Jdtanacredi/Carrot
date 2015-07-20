Meteor.subscribe("carrots");
FS.debug = true;

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
		return Tasks.find({'_id':{$in:taskIds}});
	},
	task: function (id, carrotId) {
		var relatedTasks = "";
		console.log(id);
		relatedTasks = "";
	}
});

Template.carrotList.events({
	"submit .new-carrot": function(event, template) {
		event.preventDefault();
		var carrotReward = event.target.text.value;
		var associatedTasks = $(".associatedTasks:checked").map(function() {
			return this.value;
		}).get();
		var imageID, file;
		file = template.find('.myFileInput').files[0];
		file = new FS.File(file);
		// console.log(file);
// 		FS.Utility.eachFile(event, function(file) {
			Images.insert(file, function (err, file) {
				if (err){
					 // handle error
					 console.log(err);
				} else {
					console.log(file);
// 					 // handle success depending what you need to do
					imageID = file._id;
					console.log("imageID:" + imageID)
					var imagesURL = {
						"profile.image": "/cfs/files/images/" + file._id
					};
					Meteor.call("addCarrot", carrotReward, associatedTasks,imageID);	
				}
			});	
		return false;
	},
	'change .myFileInput': function(event, template) {
//      FS.Utility.eachFile(event, function(file) {

//        Images.insert(file, function (err, fileObj) {
// 					console.log(file);
//          if (err){
//             // handle error
//          } else {
//             // handle success depending what you need to do
// //            var userId = Meteor.userId();
// 					 imageID = fileObj._id;
//            var imagesURL = {
//              "profile.image": "/cfs/files/images/" + fileObj._id
//            };
//          }
//        });
//     });
   }
});


