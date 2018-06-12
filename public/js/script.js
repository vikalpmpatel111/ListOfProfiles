angular.module('TestMe', ['ngRoute', 'ngMaterial'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/addContact', {
                templateUrl: 'templates/newContact.html',
                controller: 'NewContactCtrl'
            })
            .when('/editContactDetails', {
                templateUrl: 'templates/edit_contact.html',
                controller: 'EditContactCtrl'
            })
            .when('/home', {
                templateUrl: 'templates/Home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({ redirectTo: '/home' });
    }]).controller('HomeCtrl', function ($scope, $rootScope, $http, $location) {

        $scope.deleteDirectory = function (index) {
            $http.delete('/api/contacts/' + index).success(function (data, res) {
                $scope.refresh = function () {
                    $http.get('/api/contacts').success(function (res) {
                        $rootScope.userDetails = res;
                    });
                };
                $scope.refresh();
            }).error(function (res) {
                console.log("error", res)
            });
        };

        $scope.editDetails = function (index) {
            $location.path('/editContactDetails').search({ id: index });
        };

        $http.get('/api/contacts').success(function (res) {
            $rootScope.userDetails = res;
        });

        $scope.addContact = function () {
            $location.path('/addContact');
        };

    }).controller('NewContactCtrl', function ($scope, $rootScope, $http, $location) {
        $scope.saveData = function () {
            $scope.form_submit = true;
            if (($scope.user.firstName != null && $scope.user.firstName != undefined) &&
                ($scope.user.lastName != null && $scope.user.lastName != undefined) &&
                ($scope.user.email != null && $scope.user.email != undefined) &&
                ($scope.user.telephone != null && $scope.user.telephone != undefined) &&
                ($scope.user.address != null && $scope.user.address != undefined)) {
                $http.post('/api/contacts/', {
                    firstName: $scope.user.firstName,
                    lastName: $scope.user.lastName,
                    email: $scope.user.email,
                    telephone: $scope.user.telephone,
                    address: $scope.user.address
                }).success(function (data, res) {
                    $location.path('/home');
                });
            }
        };
       
        $scope.goToHome = function () {
            $location.path('/home');
        };
    }).controller('EditContactCtrl', function ($scope, $rootScope, $http, $location, $routeParams) {
        $http.get('/api/contacts/' + $routeParams.id).success(function (res) {
            $scope.userData = res;
        });

        $scope.updateData = function (userData) {
            if (($scope.userData.firstName != null && $scope.userData.firstName != undefined) &&
                ($scope.userData.lastName != null && $scope.userData.lastName != undefined) &&
                ($scope.userData.email != null && $scope.userData.email != undefined) &&
                ($scope.userData.telephone != null && $scope.userData.telephone != undefined) &&
                ($scope.userData.address != null && $scope.userData.address != undefined)) {
                $http.put('/api/contacts/', userData).success(function (req, res) {
                    $location.path('/home');
                });

            }
        };
        $scope.goToHome = function () {
            $location.path('/home');
        };

    });
