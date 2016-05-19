filmCo.controller("FilmCoController", function($scope, $cordovaBarcodeScanner) {
  $scope.barcodeNums = [];

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData);
    }, function(error) {
      console.log("An error happened: " + error);
    });
  };
});
