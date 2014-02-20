App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('drawings', { path: '/drawings' }, function() {
    this.route('new');
    this.route(':drawing_id');
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var nextDrawing = this.controllerFor("Drawing").setCanvas()
    var nextDrawing = this.controllerFor("Drawing").nextDrawing()
    this.transitionTo('/drawings/' + nextDrawing);
    // return this.store.find('color');
  }
});
