Carrots = new Mongo.Collection('carrots');

Meteor.publish("carrots", function () {
	return Carrots.find();
});


var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
 stores: [imageStore]
});

Meteor.publish("images", function(){ return Images.find(); });


Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});





Meteor.methods({
	addCarrot: function (reward,tasks) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
			return false;
		}
		Carrots.insert({
			carrot: reward,
			createdAt: new Date(),
			owner: Meteor.userId(),
			tasks: tasks
		});
		return false;
	},
	addImage: function(userId,imagesURL) {
		Images.insert({
			image: imagesURL,
			user: userId
		});
	}
});



  Meteor.startup(function() {
    return Meteor.methods({
      removeAllCarrots: function() {
        return Carrots.remove({});
// CALL FUNCTION WITH Meteor.call('removeAllTasks'); in inspector console. Will remove all db tasks				
      }
    });
  });