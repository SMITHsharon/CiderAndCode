app.controller("makeCiderController", ["$http", "$location", "$scope", function ($http, $location, $scope) {

    $scope.bushels = [];

    $http.get("/api/Bushels")
        .then(function (result) {
            console.log("result.data :: ", result.data);
            $scope.bushels = result.data;
        });

    $scope.makeCider = function (bushelId) {
        $http.post(`/api/Ciders/${bushelId}`, { BushelId: bushelId })
            .then((result) => {
                //$route.reload();
                $location.url('/listcider');
            })
            .catch(error => console.log(error)
            );
    };

}]);