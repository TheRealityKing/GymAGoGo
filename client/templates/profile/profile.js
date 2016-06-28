Template.profile.events({
  //console.log(this);
});

Template.profile.helpers({
  ppic: function(){
    if(this.profile){
      return "/" + this.profile.profilePic;
    }
  },
  trunc: function(){
    if(this.profile){
      return this.profile.lastName[0];
    }
  },
  pint: function(){
    //NOTE: Helpers being called twice
    if(this.profile){
      var a = [];
      var text = [];
      a = this.profile.interests;
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
  },
  sixHour: function(){
    var user = this.profile;
    if(user){
      var hourly = user.hourlyWage;
      hourly -= hourly*(1/10);
      return Math.ceil(hourly);
    }
  },
  twelveHour: function(){
    var user = this.profile;
    if(user){
      var hourly = user.hourlyWage;
      hourly -= hourly * (1/7);
      return Math.ceil(hourly);
    }
  }
});
