filmCo.controller("FilmCoController", function($scope, $cordovaBarcodeScanner) {
  var self = this;

  self.barcodeNums = [];

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      self.barcodeNums.push(imageData.text);
    }, function(error) {
      console.log("An error happened: " + error);
    });
  };
});
