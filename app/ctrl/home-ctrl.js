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
        vm.getSessionStorage = function() {
            var getObj = angular.toJson(sessionStorage.getItem('come'));
            console.log('17 -- getObj: ', getObj);
            console.log('18 -- type of getObj: ', typeof getObj);
        };
    }]);

    ctrlM.controller('homeNgGooglemapCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('homeNgGooglemapCtrl...');
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