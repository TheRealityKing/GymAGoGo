Template.register.events({
  'submit form': function(){
      event.preventDefault();
      var uname = event.target.unameRegister.value;
      var pass = event.target.passwordRegister.value;
      //add error checking
      Accounts.createUser({
          username: uname,
          password: pass
        }, function(error){
          if(error){
            console.log(error.reason);
            //TODO: append error message to DOM
          }
          else{
            Router.go('home');
          }}
      );
  }
});
