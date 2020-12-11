import EmberRouter from '@ember/routing/router';
import config from 'expense-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('budget');
  this.route('categories', function() {
    this.route('category', {path: '/:category_id'});
  });
});

