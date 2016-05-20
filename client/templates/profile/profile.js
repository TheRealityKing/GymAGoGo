Template.profile.events({
  //console.log(this);
});

Template.profile.helpers({
  ppic: function(){
    //console.log("/"+Meteor.user().profile.profilePic);
    //return "/blankprofile.jpeg
    //console.log(Meteor.user().profile.profilePic);
    return "/" + Meteor.user().profile.profilePic;
  },
  trunc: function(){
    return Meteor.user().profile.lastName[0];
  }
});
