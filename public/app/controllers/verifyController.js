(function() {
    
    var verifyController = function ($scope, $http) {
 
        $http.post('http://comp490.duckdns.org/login', { username: $scope.username, password: $scope.password }).success(function(response) {
        $scope.response = response;
        console.log($scope.response);
        })
       
        
    };
    
    verifyController.$inject = ['$scope'];

    angular.module('nexusApp')
      .controller('verifyController', verifyController);
    
}());