App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('drawings', { path: '/' }, function() {
  //   this.route('new');
  //   this.route(':drawing_id');
  });
});



App.DrawingsRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('drawings')
  },

  model: function() {
    return this.store.find('color');
  }
});
