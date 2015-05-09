Carrots = new Mongo.Collection('carrots');



  Meteor.startup(function() {

    return Meteor.methods({

      removeAllCarrots: function() {

        return Carrots.remove({});

      }

    });

  });