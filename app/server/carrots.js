Meteor.publish("carrots", function () {
	return Carrots.find();
});




Meteor.methods({
	addCarrot: function (reward,tasks,image) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
			return false;
		}
		Carrots.insert({
			carrot: reward,
			createdAt: new Date(),
			owner: Meteor.userId(),
			tasks: tasks,
			imageID: image
		});
		return false;
	}
});



  Meteor.startup(function() {
    return Meteor.methods({
      removeAllCarrots: function() {
        return Carrots.remove({});
// CALL FUNCTION WITH Meteor.call('removeAllCarrots'); in inspector console. Will remove all db tasks				
      }
    });
  });


//   Meteor.methods({
// 	addCarrot: function (reward,tasks) {
// 		if (! Meteor.userId()) {
// 			throw new Meteor.Error("not-authorized");
// 			return false;
// 		}
// 		Carrots.insert({
// 			carrot: reward,
// 			createdAt: new Date(),
// 			owner: Meteor.userId(),
// 			tasks: tasks
// 		});
// 		return false;
// 	},
// 	addImage: function(userId,imagesURL) {
// 		Images.insert({
// 			image: imagesURL,
// 			user: userId
// 		});
// 	}
// });