Template.updateTrainer.events({
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
      var pints = [];
      pints[0] = event.target.cb1.checked;
      pints[1] = event.target.cb2.checked;
      pints[2] = event.target.cb3.checked;
      //var ppic = event.target.inputProfilePic.value;
      var ppic = "arnold1.jpeg";
      var pbio = event.target.inputBio.value;
      var user = Meteor.user()._id;

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
            console.log(error);
          }
        });
      }
      if(plast != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.lastName": plast,
        } }, function(error){
          if(error){
            console.log(error);
          }
        });
      }

      if(pcity != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.city": pcity,
        } }, function(error){
          if(error){
            console.log(error);
          }
        });
      }
      if(pstate != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.state": pstate,
        } }, function(error){
        if(error){
          console.log(error);
          }
        });
      }
      if(pzip != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.zip": pzip,
        } }, function(error){
          if(error){
            console.log(error);
          }
        });
      }
      if(page != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.age": page,
        } }, function(error){
          if(error){
            console.log(error);
          }
        });
      }
      /* UPDATE INTERESTS*/
      Meteor.users.update({_id:user}, { $set: {
        "profile.interests": [
          pints[0],
          pints[1],
          pints[2]
        ]}
      });

      if(ppic != ""){
        Meteor.users.update({_id:user}, { $set: {
        "profile.profilePic": ppic
        } }, function(error){
          if(error){
          console.log("error");
          }
        });
      }
      if(pbio != ""){
        Meteor.users.update({_id:user}, { $set: {
          "profile.profileBio": pbio
        } }, function(error){
          if(error){
            console.log("error");
          }
        });
      }
      Router.go('profile', {_id: Meteor.userId()});
  }
});
