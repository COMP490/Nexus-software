(function () {
 
    var loginController = function ($scope, $http) {
        $scope.loginStatus = false;
        
           $scope.logoff = function () {
          $scope.loginStatus = false;
         console.log($scope.loginStatus);
        }
           
        $scope.login = function (credentials) {
            console.log(credentials)
            var userInfo = {
 
                "username": credentials.username,
                "password": credentials.password
 
            };
            console.log(userInfo);
 
            $http.post('http://comp490.duckdns.org/login', userInfo).success(function (response) {
                $scope.response = response;
                console.log($scope.response.result);
                if ($scope.response.result == true) {
                    $scope.loginStatus = true;
                } else {
                    $scope.loginStatus = false;
                    $scope.error = "The credientials entered were incorrect";
                }
                console.log($scope);
            })
        };
        
        
     
 
    };
 
    loginController.$inject = ['$scope', '$http'];
 
    angular.module('nexusApp')
        .controller('loginController', loginController);
 
 
}());