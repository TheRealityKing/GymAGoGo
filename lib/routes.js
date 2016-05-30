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
      //console.log(Meteor.users.findOne(this.params._id));
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
