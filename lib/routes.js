Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
  'nav': {to: 'nav'},
  'footer': {to: 'footer'},
  }
});


Router.route('/register');
Router.route('/updateTrainer');
Router.route('/updateReg');
Router.route('/login');
Router.route('/settings');
Router.route('/',{
  template: 'home',
  name: 'home',
  onBeforeAction: function() {
    document.title = "Gym-A-Go-Go";
    this.next();
  },
  onRun: function(){
    console.log("onRun");
    this.next();
  },
  onReRun: function(){
    console.log("onReRun");
    this.next();
  }
});
Router.route('/profile/:_id',{
  name: 'profile',
  template: 'profile',
  onBeforeAction: function() {
    var user = Meteor.users.findOne(this.params._id).profile;
    document.title = user.firstName + " " + user.lastName[0] + ".";
    this.next();
  },
  data: function(){
      return Meteor.users.findOne(this.params._id);
  }
});
Router.route(':_id:',{
  name: 'search',
  template: 'search',
  data: function(){
    var id = this.params._id;
    var query = this.params.query.q;
    console.log("id: "+ id + " query: " + query);
    return query;
  }
});
/*Router.route('/search/:_id',{
  name: 'search',
  template: 'search'
});
*/
