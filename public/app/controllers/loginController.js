(function () {

    var loginController = function ($scope, $http) {

        $scope.login = function (credentials) {
             console.log(credentials)
             var userInfo = {
              
                "username": credentials.username,
                "password": credentials.password
               
             };
             console.log(userInfo);
            
            $http.post('http://comp490.duckdns.org/login', userInfo).success(function (response) {
                $scope.response = response;
                console.log($scope.response);
            })
        }
    };

    loginController.$inject = ['$scope', '$http'];

    angular.module('nexusApp')
        .controller('loginController', loginController);

}());