App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  // this.resource('drawings', { path: '/drawings' }, function() {
  //   this.route('new');
  //   this.route(':drawing_id');
  // });
});



App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('color');
  }
});


// App.DrawingsNewRoute = Ember.Route.extend({

//   model: function() {

//     console.log('trying')
//     return this.store.find('color');
//   }
// });
