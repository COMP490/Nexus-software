(function () {


    var app = angular.module('nexusApp', ['ngRoute']);



    app.config(function ($routeProvider) {
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
            .otherwise({
                redirectTo: '/'
            });
    });


}());