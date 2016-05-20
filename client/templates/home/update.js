Template.update.events({
  'submit form': function(){
      event.preventDefault();
      console.log("UPDATE FUNCTION CALLED");
      var pfirst = event.target.inputFirstName.value;
      var plast = event.target.inputLastName.value;
      var pcity = event.target.inputCity.value;
      var pstate = event.target.inputState.value;
      var pzip = event.target.inputAreaCode.value;
      var page = event.target.inputAge.value;
      //var pgender = event.target.inputGender.value;
      //var pinterests = event.target.inputInterests.value;
      //var ppic = event.target.inputProfilePic.value;
      var ppic = "arnold1.jpeg";
      var user = Meteor.user()._id;
      if(pcity == ""){
      console.log("ITS NULL?");
    }
      /*
      HTTP.call('GET',ppic,{},function(error,response){
        if(error){
          console.log(error);
        } else {
          console.log(response);
        }

      });
      */
      if(pfirst != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.firstName": pfirst,
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
      }
      if(plast != ""){
        Meteor.users.update({_id:Meteor.user()._id}, { $set: {
          "profile.lastName": plast,
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
      }

      if(pcity != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.city": pcity,
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
    }
    if(pstate != ""){
      Meteor.users.update({_id:user}, { $set: {
        "profile.state": pstate,
      } }, function(error){
        if(error){
        console.log("error");
      }
    });
  }
      if(pzip != ""){
        Meteor.users.update({_id:Meteor.user()._id}, { $set: {
          "profile.zip": pzip,
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
      }
      if(page != ""){
        Meteor.users.update({_id:Meteor.user()._id}, { $set: {
          "profile.age": page,
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
      }
      /*if(pgender != ""){
        Meteor.users.update({_id:Meteor.user()._id}, { $set: {
        "profile.gender": pgender,
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
    }*/
      if(ppic != ""){
        Meteor.users.update({_id:Meteor.user()._id}, { $set: {
        "profile.profilePic": ppic
        } }, function(error){
          if(error){
          console.log("error");
        }
      });
    }
    //TODO: FIX THIS ROUTE
    //Router.go('profile');
      //Router.go("profile", Meteor.user()._id);
      /*Meteor.users.update({_id:Meteor.user()._id}, { $set: {
        "profile.city": pcity,
        "profile.zip": pzip,
        "profile.age": page,
        "profile.gender": pgender,
        "profile.interests": null,
        "profile.profilePic": ppic
      } }, function(error){
        if(error){
        console.log("error update");
      }
      else{
        //Router.go("/profile/");
      }
    });*/
  }
});
