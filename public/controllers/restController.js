'use strict'

app.controller('restController', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/rest_data'
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.rest_data = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
 
});