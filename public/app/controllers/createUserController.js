(function () {

    var createUserController = function ($scope) {
        this.showModal = false;

                this.showView = false;

                this.counter = 1;

                this.toggleDialog = function () {

                    this.showModal = !this.showModal;

                }

                this.toggleView = function () {

                    this.showView = !this.showView;

                }

                this.changeDisplay = function () {

                    this.counter++;

                }

            }

    createUserController.$inject = ['$scope'];

    angular.module('nexusApp')
        .controller('createUserController', createUserController);


}());