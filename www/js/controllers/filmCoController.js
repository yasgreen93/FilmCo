filmCo.controller("FilmCoController", ['$scope', '$cordovaBarcodeScanner', '$http', 'filmCoAwsService', function($scope, $cordovaBarcodeScanner, $http, filmCoAwsService) {
    var self = this;

    self.barcodeNums = [];
    self.filmInfo = [];

    // $scope.scanBarcode = function() {
    //   $cordovaBarcodeScanner.scan().then(function(imageData) {
    //     self.barcodeNums.push(imageData.text);
    //   }, function(error) {
    //     console.log("An error happened: " + error);
    //   });
    // };

    // $scope.scanBarcode = function() {
    //   $cordovaBarcodeScanner.scan().then(function(imageData) {
    //     filmCoAwsService.itemLookup(imageData.text)
    //       .then(function(response) {
    //         filmInfo.push(response);
    //       });
    //   });
    // };

    $scope.scanBarcode = function() {
      console.log("Controller called...");
      return filmCoAwsService.itemLookup(5050582556148)
        .then(function(response) {
          console.log("Response...");
          console.log(response);
          self.filmInfo.push(response);
        });
    };

    // $scope.scanBarcode = function() {
    //   $cordovaBarcodeScanner.scan()
    //     .then(_apiRequest);
    // };

    // $scope.scanBarcode = function() {
    //   $cordovaBarcodeScanner.scan().then(function(imageData) {
    //     return $http.get("https://api.outpan.com/v2/products/" + imageData.text + "?apikey=NUMBER")
    //       .then(function(response) {
    //         self.filmInfo.push(response.data);
    //       });
    //   }, function(error) {
    //     alert("An error happened: " + error);
    //   });
    // };


    // $scope.apiRequest = function(response) {
    //   return $http.get("https://api.outpan.com/v2/products/" + self.num + "?apikey=NUMBER")
    //     .then(_parseResponseFromApi);
    // };

    // $scope.apiRequest = function() {
    //   console.log("called");
    //   return $http.get("https://api.outpan.com/v2/products/8717418407230?apikey=NUMBER")
    //     .then(function(response) {
    //       console.log(response);
    //       self.filmInfo.push(response.data);
    //     });
    // };

    // function _parseResponseFromApi(response) {
    //   return self.filmInfo.push(response.data);
    // }
}]);
