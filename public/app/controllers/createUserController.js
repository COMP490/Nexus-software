(function () {

    var createUserController = function ($scope, close) {

        $scope.dismissModal = function (result) {
            close(result, 200); // close, but give 200ms for bootstrap to animate
        };


    };

    createUserController.$inject = ['$scope' , 'close'];

    angular.module('nexusApp')
        .controller('createUserController', createUserController);

}());