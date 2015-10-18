(function () {

        var loginController = function ($scope, $http, ModalService) {
            $scope.loginStatus = false;

            $scope.showAModal = function () {

                // Just provide a template url, a controller and call 'showModal'.
                ModalService.showModal({
                    templateUrl: "app/views/createUser.html",
                    controller: "createUserController"
                }).then(function (modal) {
                    // The modal object has the element built, if this is a bootstrap modal
                    // you can call 'modal' to show it, if it's a custom modal just show or hide
                    // it as you need to.
                    modal.element.modal();
                    modal.close.then(function (result) {
                        $scope.message = result ? "You said Yes" : "You said No";
                    });
                });

            };

        

        $scope.logout = function (something) {
            $scope.loginStatus = false;
            console.log($scope.loginStatus);
        };

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

    loginController.$inject = ['$scope', '$http', 'ModalService'];

    angular.module('nexusApp')
    .controller('loginController', loginController);

}());