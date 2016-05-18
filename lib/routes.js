Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
  'nav': {to: 'nav'},
  'footer': {to: 'footer'},
  }
});


Router.route('/register');
Router.route('/update');
Router.route('/login');
Router.route('/settings');
Router.route('/',{
  template: 'home',
  name: 'home',
  onRun: function(){
    console.log("onRun");
    this.next();
  },
  onReRun: function(){
    console.log("onReRun");
  }
});
Router.route('/profile/:_id',{
  name: 'profile',
  template: 'profile',
  data: function(){
      //console.log(this.params);
      console.log(Meteor.users.findOne(this.params._id));
      return Meteor.users.findOne(this.params._id);
  }
});
