Template.login.events({
  'submit form': function(event){
    event.preventDefault();
    var uname = event.target.unameLogin.value;
    var pass = event.target.passwordLogin.value;
    Meteor.loginWithPassword(uname,pass,function(error){
      if(error){
        console.log(error);
        var log = document.getElementById('pslogin');
        var pd = document.getElementById('pdlogin');
        pd.className='form-group has-error';
        console.log(pd);
        log.value='';
        log.placeholder=error.reason;
      }
      else{
        Router.go('home');
      }
    });
  }
});
