Template.update.events({
  'submit form': function(){
      event.preventDefault();
      //console.log("UPDATE FUNCTION CALLED");
      var pcity = event.target.inputCity.value;
      var pzip = event.target.inputAreaCode.value;
      var page = event.target.inputCity.value;
      var pgender = event.target.inputAge.value;
      //var pinterests = event.target.inputInterests.value;
      var ppic = event.target.inputProfilePic.value;
      console.log(pcity);

      Meteor.users.update({_id:Meteor.user()._id}, { $set: {
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
        Router.go("/profile/");
      }
    });
  }
});
