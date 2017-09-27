app.controller("stealApplesController", ["$http", "$location", "$scope", function ($http, $location, $scope) {

    $scope.bushels = [];

    $http.get("/api/Bushels")
        .then(function (result) {
 console.log("result.data :: ", result.data);
            $scope.bushels = result.data;
        });

    $scope.stealApples = function (mealId) {
        $http.delete(`/api/Bushels/delete/${mealId}`)
            .then((result) => {
console.log(result);
                // rewriting screen not working?
                $location.url('/stealapples');
            })
            .catch(error => console.log(error)
            );
    };
    
}]);