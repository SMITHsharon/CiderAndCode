app.controller("listCiderController", ["$http", "$location", "$scope", function ($http, $location, $scope) {

    console.log("listing cider");

    $scope.ciders = [];

    $http.get("/api/Ciders")
        .then(function (result) {
            console.log("result.data :: ", result.data);
            $scope.bushels = result.data;
        });

}]);