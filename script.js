var MainController = function($scope) {
  var person = {
    firstName: "Scott",
    lastName: "Allen",
    imageSrc: "http://stevewitman.com/img/preview-small.jpg"
  }

  $scope.message = "Angular 1.2";
  $scope.person = person;
};
