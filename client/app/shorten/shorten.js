angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  //$scope.addLink = function(link) {
    //Links.addOne(link);
  //};
  $scope.addLink = function(link) {
    console.log(link);
    var resp = Links.addOne(link);
  };

});
