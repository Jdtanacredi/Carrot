Template.userLogin.events({
'submit form': function(event, template){
    event.preventDefault();
    console.log(template);
    console.log("Form submitted.");

    var userEmail = template.find("#login-email").value;
    var userPassword = template.find("#login-password").value;
    Meteor.loginWithPassword(userEmail,userPassword);
    }
});

Template.userLogin.helpers({});