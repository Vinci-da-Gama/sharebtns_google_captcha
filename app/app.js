(function() {

    /**
     * sbgc Module
     *
     * The main module of this application...
     */
    angular.module('sbgc', ['ui.bootstrap', 'sbgc.router', 'sbgc.ctrl']);

    angular.module('sbgc.router', ['ui.router']);
    angular.module('sbgc.ctrl', []);

})();