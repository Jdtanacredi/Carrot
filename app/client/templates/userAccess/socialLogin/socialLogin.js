Template.socialLogin.events({
	'click .btn-facebook': function() {
		console.log('clicks');
		Meteor.loginWithFacebook({
			requestPermissions: ['email']
		}, function(error) {
			if (error) {
				console.log(error);
			}
		});
	}

});

Template.socialLogin.helpers({});