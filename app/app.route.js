(function() {
    var rM = angular.module('sbgc.router');

    rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './_partials/initHome.html',
                controller: 'homeCtrl',
                controllerAs: 'hc'
            })
            .state('home.ngGoogleMap', {
                url: '/ngGoogleMap',
                templateUrl: './_partials/home/ngGoogleMap.html',
                controller: 'homeNgGooglemapCtrl',
                controllerAs: 'hmapc'
            })
            .state('home.register', {
                url: '/register',
                templateUrl: './_partials/home/register.html',
                controller: 'homeRegisterCtrl',
                controllerAs: 'hrc'
            })
            .state('sharebtns', {
                url: '/sharebtns',
                views: {
                    '': {
                        templateUrl: './_partials/sbs.html',
                        controller: 'sharebtnsCtrl',
                        controllerAs: 'sc'
                    },
                    'sbl@sharebtns': {
                        templateUrl: './_partials/sharebtns/sbleft.html',
                        controller: 'sharebtnsLeftCtrl',
                        controllerAs: 'slc'
                    },
                    'sbr@sharebtns': {
                        templateUrl: './_partials/sharebtns/sbright.html',
                        controller: 'sharebtnsRightCtrl',
                        controllerAs: 'src'
                    }
                }
            });

    }]);

})();