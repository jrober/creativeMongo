var app = angular.module('contact', [])
app.controller('MainCtrl', function($scope,$http){

  $scope.contacts = [];
  $scope.addContact = function() {
    var newContact = {title:$scope.name,upvotes:0};
    $scope.name='';
    $http.post('/comments', newContact).success(function(data){
      $scope.contacts.push(data);
    });
  };
  $scope.upvote = function(comment) {
    return $http.put('/comments/' + comment._id + '/upvote')
      .success(function(data){
        console.log("upvote worked");
        comment.upvotes = data.upvotes;
      });
  };
  $scope.incrementUpvotes = function(comment) {
  $scope.upvote(comment);
  };
  $scope.getAll = function() {
    return $http.get('/comments').success(function(data){
      angular.copy(data, $scope.comments);
    });
  };
  $scope.getAll();

});
