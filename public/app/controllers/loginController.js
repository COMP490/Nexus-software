(function() {
    
    var loginController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        
    };
    
    loginController.$inject = ['$scope'];

    angular.module('nexusApp')
      .controller('loginController', loginController);
    
}());