filmCo.service('filmCoAwsService', ["$http", function($http) {
    var self = this;

    self.itemLookup = function(imageData) {
      var barcode = { barcodeNum: imageData };
      var url = "https://filmco-backend-server.herokuapp.com/films/api";
      var data = JSON.stringify(barcode);
      var headers = { headers: { 'Content-Type': 'application/json' }, dataType: 'jsonp'};

      return $http.post(url, data, headers).then(function(res) {
        self.status = '';
        return res;
      }).catch(function(res) {
        console.log(res);
        self.status = 'Failed';
        return self.status;
      });
    };
  }]);
