filmCo.controller("FilmCoController", ['$scope', '$cordovaBarcodeScanner', '$http', 'filmCoAwsService', function($scope, $cordovaBarcodeScanner, $http, filmCoAwsService) {
    var self = this;

    self.filmInfo = [];

    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        filmCoAwsService.itemLookup(imageData.text)
          .then(function(response) {
            self.filmInfo.push(response.data["Items"]);
          });
      });
    };

}]);
