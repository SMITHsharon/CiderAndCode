app.controller("stealApplesController", ["$http", "$scope", function ($http, $scope) {

    $scope.bushels = [];

    $http.get("/api/Bushels")
        .then(function (result) {
            $scope.bushels = result.data;
        });

    $scope.stealApples = function (mealId) {
        $http.delete(`$/api/Bushels/delete/${mealId}`)
            .then(result => console.log(result))
            .catch(error => console.log(error));
    };
    
}]);