Template.userRegister.events({
'submit form': function(event, template){
    event.preventDefault();
    console.log("Form submitted.");

    var userEmail = template.find("#register-email").value;
    var userPassword = template.find("#register-password").value;
    Accounts.createUser({
    	email: userEmail,
    	password: userPassword
    });

    }
});

Template.userRegister.helpers({});