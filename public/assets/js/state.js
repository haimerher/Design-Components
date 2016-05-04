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
        .state('components', {
            url: '/components',
            templateUrl: 'app/views/templates/components.html'      	
        })
        .state('components.buttons', {
            url: '/buttons',
            templateUrl: 'app/views/components/buttons.html'
        })
        .state('components.container', {
            url: '/container',
            templateUrl: 'app/views/components/container.html'
        })
        .state('components.grid', {
            url: '/grid',
            templateUrl: 'app/views/components/grid.html'
        })
        .state('components.form', {
            url: '/form',
            templateUrl: 'app/views/components/form.html'
        })
        .state('components.labels', {
            url: '/labels',
            templateUrl: 'app/views/components/labels.html'
        })
        .state('components.message', {
            url: '/message',
            templateUrl: 'app/views/components/message.html'
        })
        .state('components.navbars', {
            url: '/navbars',
            templateUrl: 'app/views/components/navbars.html'
        })
        .state('components.images', {
            url: '/images',
            templateUrl: 'app/views/components/images.html'
        })
        .state('components.table', {
            url: '/table',
            templateUrl: 'app/views/components/table.html'
        })
        .state('components.breadcrumbs', {
            url: '/breadcrumbs',
            templateUrl: 'app/views/components/breadcrumbs.html'
        })
        .state('components.list', {
            url: '/list',
            templateUrl: 'app/views/components/list.html'
        })
        .state('components.progress', {
            url: '/progressbar',
            templateUrl: 'app/views/components/progress.html'
        })

        // JS STATES =========================================
        .state('js', {
            url: '/js',
            templateUrl: 'app/views/templates/js.html'
        })
        .state('js.tooltips', {
            url: '/tooltips',
            templateUrl: 'app/views/js_elements/tooltips.html'
        })
        .state('js.modal', {
            url: '/modalbox',
            templateUrl: 'app/views/js_elements/modal.html'
        })
});