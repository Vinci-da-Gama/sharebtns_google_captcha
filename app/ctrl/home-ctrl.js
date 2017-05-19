/*jshint esversion: 6 */
(function() {
    var ctrlM = angular.module('sbgc.ctrl');

    ctrlM.controller('homeCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('Home_Ctrl...');
        var vm = this;
        vm.setSessionStorage = function() {
            var obj = {
                long: 100,
                short: 1
            };
            sessionStorage.setItem('come', JSON.stringify(obj));
        };
    }]);

    ctrlM.controller('homeLoiginCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('homeLoiginCtrl...');
    }]);

    ctrlM.controller('homeRegisterCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('homeRegisterCtrl...');
    }]);

    ctrlM.controller('sharebtnsCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('sharebtnsCtrl...');
    }]);

    ctrlM.controller('sharebtnsLeftCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('sharebtnsLeftCtrl...');
    }]);

    ctrlM.controller('sharebtnsRightCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('sharebtnsRightCtrl...');
    }]);

})();