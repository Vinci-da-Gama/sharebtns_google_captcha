(function() {

    /**
     * sbgc Module
     *
     * The main module of this application...
     */
    angular.module('sbgc', ['ngAnimate', 'ngTouch', '720kb.socialshare', 'ngMap', 'sbgc.router', 'sbgc.ctrl', 'sbgc.services', 'sbgc.constants']);

    angular.module('sbgc.router', ['ui.router']);
    angular.module('sbgc.ctrl', []);
    angular.module('sbgc.services', []);
    angular.module('sbgc.constants', []);

})();