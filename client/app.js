angular.module('curates', [
  'ui.router',
  'curates.collectionsList',
  'curates.myCollections',
  'curates.singleCollection',
  'curates.editCollection',
  'curates.services',
  'curates.collectionFactory',
  'curates.createCollection'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

});
