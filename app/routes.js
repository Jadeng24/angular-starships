angular.module('starships').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', { //giving it a new state, 'home' is naming the state

        url: '/',
        template: 'home State'

    }).state('ships', {
        url: '/ships',
        templateUrl: 'app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('shipDetail', {
        url: '/ships/:id',
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'

    })
    $urlRouterProvider.otherwise('/'); // if go to invalid route (url) go here '/'
})