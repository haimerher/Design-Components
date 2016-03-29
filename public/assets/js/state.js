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
        .state('css.form', {
            url: '/form',
            templateUrl: 'app/views/css_elements/form.html'
        })
        .state('css.labels', {
            url: '/labels',
            templateUrl: 'app/views/css_elements/labels.html'
        })
        .state('css.message', {
            url: '/message',
            templateUrl: 'app/views/css_elements/message.html'
        })
        .state('css.navbars', {
            url: '/navbars',
            templateUrl: 'app/views/css_elements/navbars.html'
        })
        .state('css.images', {
            url: '/images',
            templateUrl: 'app/views/css_elements/images.html'
        })
        .state('css.table', {
            url: '/table',
            templateUrl: 'app/views/css_elements/table.html'
        })
});