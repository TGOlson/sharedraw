App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('index', { path: '/' }, function() {
    this.route(':drawing_id');
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('color');
  },

  activate: function() {
    // console.log('setting')
    // this.controllerFor('Drawing').send('setCanvas');
    // this.controllerFor('drawing').setCanvas();
    // console.log('setting')
  }
});
