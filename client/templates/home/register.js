Template.register.events({
  'submit form': function(){
      event.preventDefault();
      var uname = event.target.unameRegister.value;
      var pass = event.target.passwordRegister.value;
      //add error checking
      Accounts.createUser({
          username: uname,
          password: pass,
          profile: {
            zip: null,
            city: null,
            age: null,
            interests: null,
            profilePic: null
          }
        }, function(error){
          if(error){
            console.log(error.reason);
            var log = document.getElementById('psRegister');
            var pd = document.getElementById('pdRegister');
            pd.className='form-group has-error';
            //log.id='inputError';
            console.log(pd);
            log.value='';
            log.placeholder=error.reason;
          }
          else{
            Router.go('update');
          }}
      );
  }
});
