angular.module('starships').service('shipSrvc', function ($http) { //similar to axios - http
    this.getShips = function () {
        return $http.get('https://swapi.co/api/starships/').then(res => {
            return res.data.results;
        }).catch(err => {
            console.log('Error getting ships', err);
        }) 
        
    }
    this.getShip = function (id) {
        return $http.get(`https://swapi.co/api/starships/${id}`).then(res => {
            return res.data;
        }).catch(err => {
            console.log('Error getting ships', err);
        })
    }
    this.getId = function (ship) {
        // start with ship obj
        // ship.url https://swapi.co/api/starships/5/
        let shipID = ship.url.split('/');
        return shipID[shipID.length-2 ] * 1
    }
})