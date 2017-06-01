(function() {
    var countryCodeService = angular.module('sbgc.services');

    countryCodeService.service('currentCountryCode', ['$http', '$q', '$sce', 'countryCodeUrl', function($http, $q, $sce, countryCodeUrl) {
        this.grabCountryCode = function() {
            // var url = 'http://freegeoip.net/json/';
            // var url = 'http://ipinfo.io/json';
            var trustUrl = $sce.trustAsResourceUrl(countryCodeUrl);
            return $http.jsonp(trustUrl)
                .then(function(response) {
                    return response;
                })
                .catch(function(err) {
                    console.log('11 -- err is:', err);
                    throw err;
                });
        }
    }]);

})();