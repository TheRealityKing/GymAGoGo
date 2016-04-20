Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
  'nav': {to: 'nav'},
  'footer': {to: 'footer'},
  }
});


Router.route('/register');
Router.route('/login');
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
  template: 'profile',
  data: function(){
      var currentList = this.params_id;
      return Lists.findOne({_id: currentList});
  }
});
