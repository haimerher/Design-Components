// state.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES ========================================
        .state('home', {
            
        })

        // GETTING STARTED STATES =============================
        .state('start', {
            url: '/getting-started',
            templateUrl: 'app/views/templates/start.html'
        })

        // CSS STATES =========================================
        .state('css', {
            url: '/css',
            templateUrl: 'app/views/templates/css.html'
        })
        
});