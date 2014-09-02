angular.module('curates.services', [])
.factory('userManagement', function() {

  var user = {
    name: '',
    provider: 'test',
    id: '',
    fullName: '',
    loggedIn: false
  };
  var login = function(name) {
    user.name = name;
    user.id = name;
    user.fullName = name;
    user.provider = 'test';
    user.loggedIn = true;
  };
  var logout = function() {
    user.name = '';
    user.loggedIn = false;
  };
  var validateUser = function(target) {
    return target.provider === user.provider && target.id === user.id
  };
  return {
    user: user,
    login: login,
    logout: logout,
    validateUser: validateUser
  };
})
.controller('userMangamentController', function($scope, userManagement) {
  $scope.user = userManagement.user;
  $scope.login = userManagement.login;
  $scope.logout = userManagement.logout;
})
