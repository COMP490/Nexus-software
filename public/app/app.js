(function () {


    var app = angular.module('nexusApp', ['ngRoute']);



    app.config(function ($routeProvider, $httpProvider) {
 $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
        $routeProvider
            .when('/', {
                controller: 'loginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/verify', {
                controller: 'verifyController',
                templateUrl: 'app/views/verify.html'
            })
            .when('/profile', {
                controller: 'profileController',
                templateUrl: 'app/views/profile.html'
            })
            .when('/messages', {
                controller: 'messageController',
                templateUrl: 'app/views/messages.html'
            })
            .when('/league', {
                controller: 'leagueController',
                templateUrl: 'app/views/league.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


}());