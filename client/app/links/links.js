angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  console.log($scope);
  Links.getAll()
    .then(function(links) { 
      $scope.data.links = links;
    });

   $scope.signout = Auth.signout;
  //Auth.signout();
});
 