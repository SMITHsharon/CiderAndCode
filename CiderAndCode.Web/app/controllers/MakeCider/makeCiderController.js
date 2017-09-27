app.controller("makeCiderController", ["$http", "$location", "$scope", function ($http, $location, $scope) {

console.log("making cider");

    $scope.bushels = [];

    $http.get("/api/Bushels")
        .then(function (result) {
            console.log("result.data :: ", result.data);
            $scope.bushels = result.data;
        });

    $scope.makeCider = function (mealId) {
        $http.update(`/api/Bushels/cider/${mealId}`)
            .then((result) => {
                console.log(result);
                // rewriting screen not working?
                $location.url('/makecider');
            })
            .catch(error => console.log(error)
            );
    };

}]);