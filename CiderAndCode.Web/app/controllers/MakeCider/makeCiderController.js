app.controller("makeCiderController", ["$http", "$location", "$scope", function ($http, $location, $scope) {

console.log("making cider");

    $scope.bushels = [];

    $http.get("/api/Bushels")
        .then(function (result) {
            console.log("result.data :: ", result.data);
            $scope.bushels = result.data;
        });

    $scope.makeCider = function (bushelId) {
        $http.post(`/api/cider/${bushelId}`, { BushelId: bushelId })
            .then((result) => {
                $route.reload();
            })
            .catch(error => console.log(error)
            );
    };

}]);