(function() {
    var appM = angular.module('sbgc');

    appM.config(['socialshareConfProvider', function configApp(socialshareConfProvider) {
        socialshareConfProvider.configure([{
                'provider': 'reddit',
                'conf': {
                    'url': 'https://www.panarottisrewards.com.au/',
                    'text': 'reddit-text',
                    'trigger': 'click'
                }
            },
            {
                'provider': 'pocket',
                'conf': {
                    'url': 'https://panarottisrewards.co.za/',
                    'trigger': 'mouseover',
                    'text': 'pocket-text',
                    'popupHeight': 1300,
                    'popupWidth': 1000
                }
            }
        ]);
    }]);

})();