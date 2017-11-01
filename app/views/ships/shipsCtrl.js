angular.module('starships').controller('shipsCtrl', function ($scope, shipSrvc) {
    // $scope.ships = [
    //     'x-wing',
    //     'ti-fighter',
    //     'millenium falcon',
    //     'death star'
    // ]
    shipSrvc.getShips().then(ships => {
        $scope.ships = ships;
    })
    $scope.getId = shipSrvc.getId;
})