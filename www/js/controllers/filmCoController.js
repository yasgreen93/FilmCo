filmCo.controller("FilmCoController", function($scope, $cordovaBarcodeScanner, $http) {
  var self = this;

  self.barcodeNums = [];
  self.filmInfo = [];

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      self.barcodeNums.push(imageData.text);
    }, function(error) {
      console.log("An error happened: " + error);
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
});
