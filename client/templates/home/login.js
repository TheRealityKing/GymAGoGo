Template.login.events({
  'submit form': function(event){
    event.preventDefault();
    var uname = event.target.unameLogin.value;
    var pass = event.target.passwordLogin.value;
    Meteor.loginWithPassword(uname,pass,function(error){
      if(error){
        console.log(error);
        //clear password field
        document.getElementById('pslogin').value='';
        //TODO: append error message to DOM
      }
      else{
        Router.go('home');
      }
    });
  }
});
