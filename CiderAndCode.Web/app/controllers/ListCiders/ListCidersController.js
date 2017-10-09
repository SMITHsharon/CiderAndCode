﻿app.controller("listCidersController", ["$http", "$location", "$scope", function ($http, $location, $scope) {

    console.log("listing cider");

    $scope.ciders = [];

    $http.get("/api/Ciders")
        .then(function (result) {
            console.log("result.data :: ", result.data);
            $scope.ciders = result.data;
        });

}]);