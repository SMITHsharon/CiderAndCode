app.controller("stealApplesController", ["$http", "$location", "$scope", "$route", function ($http, $location, $scope, $route) {

    $scope.bushels = [];

    $http.get("/api/Bushels")
        .then(function (result) {
            console.log("result.data :: ", result.data);
            $scope.bushels = result.data;
        });

    $scope.stealApples = function (bushelId) {
        $http.delete(`/api/Bushels/delete/${bushelId}`)
            .then((result) => {
                $route.reload();
            })
            .catch(error => console.log(error)
            );
    };

}]);