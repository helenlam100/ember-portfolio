App.Router.map(function() {
  // put your routes here

  this.route('resume');
  this.resource('portfolio', function(){
    this.route('project', {path: '/:project_id'});
  });
});


App.PortfolioRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('project');
  }
});
