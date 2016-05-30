Template.nav.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('login');
  },
  'submit form': function(event){
    event.preventDefault();
    console.log("Nav Search Submit Request");
    //console.log(document.getElementById('searchUsers').value);
    var sV = document.getElementById('searchUsers').value;
    //TODO: No route found name 'search'
    Session.set("SearchValue", sV);
    Router.go('search', {_id: "search"}, {query: 'q=' + sV});
  }
});

Template.nav.helpers({
  'isTrainer': function(){
    var user = Meteor.user();
    if(user){
      if(user.profile.isTrainer){
        console.log("isTrainer!");
        return true;
      }
      else{
        console.log("Not Trainer");
        return false;
      }
    }
    else{
      console.log("NOT USER");
    }
  }
});
