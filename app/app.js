(function () {

	/**
	* appname Module
	*
	* The main module of this application...
	*/
	angular.module('appname', ['ui.bootstrap', 'appname.router', 'appname.ctrl']);

	angular.module('appname.router', ['ui.router']);
	angular.module('appname.ctrl', []);

})();
