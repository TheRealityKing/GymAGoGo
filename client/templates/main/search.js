Template.search.helpers({
  data: function(){
    return this;
  },
  query: function(){
    return Template.instance().searchQuery.get();
  },
  name: function(){
    return this.profile.firstName + " " + this.profile.lastName[0] + ".";
  },
  ppic: function(){
    console.log(this.profile.profilePic);
    return "/" + this.profile.profilePic;
  },
  currID: function(){
    if(Meteor.user()){
      return this.profile._id;
    }
  },
  results: function(){
    //console.log("THIS: " + this);
    //NOTE: USING DOM TO GET SEARCH VALUE RATHER THAN template instance data.
    // IDK WHICH IS BETTER, but only the DOM worked for me! (this: is an object
    // not a string that we can use for comparisons. Need to learn more about)
    // template instancing
    //NOTE: USING SESSION VARIABLES!! THEY ARE REACTIVE TOO
    //NOTE: Session variables still reset on refresh.. template instance data
    // still remains the same =[
    var search = Session.get("SearchValue");
    //var search = document.getElementById("searchUsers");
    if(search)
    {
      //search = search.value.trim();
      console.log("SEARCH: " + search + "x");
      let results=Meteor.users.find({"profile.zip": search}).fetch();
      if(results){
        for(i = 0; i < results.length; ++i){
          console.log(results[i]);
        }
        return results;
      }
      else{
        console.log("No results found for: "+ this);
      }
    }
    else{
      console.log("NULL");
    }
  }
});
