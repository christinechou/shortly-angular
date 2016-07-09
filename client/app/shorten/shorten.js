angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  
  $scope.addLink = function(link) {

    Links.addOne(link).then(function() {
      console.log('success');
    });
  };

});
