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
            .state('home.login', {
                url: '/login',
                templateUrl: './_partials/home/login.html',
                controller: 'homeLoiginCtrl',
                controllerAs: 'hlc'
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