Template.profile.events({
  //console.log(this);
});

Template.profile.helpers({
  ppic: function(){
    if(Meteor.user()){
      return "/" + Meteor.user().profile.profilePic;
    }
  },
  trunc: function(){
    if(Meteor.user()){
      return Meteor.user().profile.lastName[0];
    }
  },
  pint: function(){
    //NOTE: Helpers being called twice
    if(Meteor.user()){
      var a = [];
      var text = [];
      a = Meteor.user().profile.interests;
      var arr = [
        "Physical Therapy",
        "Yoga",
        "Massage Therapy"
      ];
      //console.log(a.length);
      for(i = 0; i < a.length; ++i){
        if(a[i]){
          //console.log("i: " + i + " arr[i]: " + arr[i]);
          text.push(arr[i]);
        }
      }
      return text;
    }
  }
});
