'use strict';

angular
  .module('clasherApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'mgcrea.ngStrap',
    'firebase',
    'simpleLoginTools',
    'angularfire.firebase',
    'angularfire.login'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        authRequired: false,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/', {
        redirectTo: '/main'
      })
      .when('/building', {
        templateUrl: 'views/building.html',
        controller: 'BuildingCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  })
  .run(function ($rootScope, simpleLogin) {
    simpleLogin.logout();
    // $rootScope.profile = {
    //   user: {
    //     name: 'Rodrigo Valerio'
    //   }
    // };
    // console.log($rootScope);
  });
