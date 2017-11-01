angular.module('starships').controller('shipCtrl', function ($scope, shipSrvc, $stateParams) {
    $scope.id = $stateParams.id;
    shipSrvc.getShip($stateParams.id).then(shipDetail => {
        $scope.ship = shipDetail;
    })
})