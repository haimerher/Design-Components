// state.js
var routerApp = angular.module('routerApp', ['ui.router']);

var scrollContent = function() {
    $('html, body').animate({ scrollTop: -10000 }, 100);
};

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES ========================================
        .state('home', {
            
        })

        // GETTING STARTED STATES =============================
        .state('start', {
            url: '/getting-started',
            templateUrl: 'app/views/templates/start.html',
            onEnter: scrollContent,
        })

        // CSS STATES =========================================
        .state('css', {
            url: '/css',
            templateUrl: 'app/views/templates/css.html'      	
        })

        .state('css.buttons', {
            url: '/buttons',
            templateUrl: 'app/views/css_elements/buttons.html'
        })
        
        .state('css.container', {
            url: '/container',
            templateUrl: 'app/views/css_elements/container.html'
        })
});