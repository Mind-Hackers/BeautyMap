/***
 *     /$$$$$$ /$$$$$$$  /$$   /$$ /$$$$$$$$ /$$   /$$
 *    |_  $$_/| $$__  $$| $$$ | $$| $$_____/| $$  / $$
 *      | $$  | $$  \ $$| $$$$| $$| $$      |  $$/ $$/
 *      | $$  | $$  | $$| $$ $$ $$| $$$$$    \  $$$$/
 *      | $$  | $$  | $$| $$  $$$$| $$__/     >$$  $$
 *      | $$  | $$  | $$| $$\  $$$| $$       /$$/\  $$
 *     /$$$$$$| $$$$$$$/| $$ \  $$| $$$$$$$$| $$  \ $$
 *    |______/|_______/ |__/  \__/|________/|__/  |__/
 *
 *
 *
 */
angular.module('myApp.controllers').controller('IndexCtrl', ['$rootScope', '$scope', 'avLog', 'AuthService', 'Session', '$location',
    function($rootScope, $scope, avLog, AuthService, Session, $location) {

        var logger = avLog.getLogger('IndexCtrl');

        $scope.sidebarStatus = false;
          logger.info('load sidebar page: ' + $scope.sidebarStatus);

        $scope.$on('updateSidebarStatus', function(event, data) {

              logger.debug('on updateSidebarStatus:' + data);
               $scope.sidebarStatus = data;
        });
    }
]);


/***
 *      /$$$$$$  /$$$$$$ /$$$$$$$  /$$$$$$$$       /$$$$$$$   /$$$$$$  /$$$$$$$
 *     /$$__  $$|_  $$_/| $$__  $$| $$_____/      | $$__  $$ /$$__  $$| $$__  $$
 *    | $$  \__/  | $$  | $$  \ $$| $$            | $$  \ $$| $$  \ $$| $$  \ $$
 *    |  $$$$$$   | $$  | $$  | $$| $$$$$         | $$$$$$$ | $$$$$$$$| $$$$$$$/
 *     \____  $$  | $$  | $$  | $$| $$__/         | $$__  $$| $$__  $$| $$__  $$
 *     /$$  \ $$  | $$  | $$  | $$| $$            | $$  \ $$| $$  | $$| $$  \ $$
 *    |  $$$$$$/ /$$$$$$| $$$$$$$/| $$$$$$$$      | $$$$$$$/| $$  | $$| $$  | $$
 *     \______/ |______/|_______/ |________/      |_______/ |__/  |__/|__/  |__/
 *
 *
 *
 */
angular.module('myApp.controllers').controller('SidebarCtrl', ['$rootScope', '$scope', 'avLog', 'AuthService', 'Session', '$location',
    function($rootScope, $scope, avLog, AuthService, Session, $location) {

        var logger = avLog.getLogger('SidebarCtrl');

        logger.info('load sidebar page: ' + $scope.sidebarStatus);

    }
]);

/***
 *     /$$   /$$ /$$$$$$$$  /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$$$$$$
 *    | $$  | $$| $$_____/ /$$__  $$| $$__  $$| $$_____/| $$__  $$
 *    | $$  | $$| $$      | $$  \ $$| $$  \ $$| $$      | $$  \ $$
 *    | $$$$$$$$| $$$$$   | $$$$$$$$| $$  | $$| $$$$$   | $$$$$$$/
 *    | $$__  $$| $$__/   | $$__  $$| $$  | $$| $$__/   | $$__  $$
 *    | $$  | $$| $$      | $$  | $$| $$  | $$| $$      | $$  \ $$
 *    | $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$/| $$$$$$$$| $$  | $$
 *    |__/  |__/|________/|__/  |__/|_______/ |________/|__/  |__/
 *
 *
 */
angular.module('myApp.controllers').controller('HeaderCtrl', ['$rootScope', '$scope', 'avLog', 'AuthService', 'Session', '$location',
    function($rootScope, $scope, avLog, AuthService, Session, $location) {

        var logger = avLog.getLogger('HeaderCtrl');

        logger.info('load header page');
        $scope.sidebarStatus = false;

        $scope.toggleSidebarStatus = function() {
          logger.debug('click sidebar button');

            $scope.sidebarStatus = !$scope.sidebarStatus;

            $rootScope.$broadcast('updateSidebarStatus', $scope.sidebarStatus);

        };

    }
]);

angular.module('myApp.controllers').controller('ConfCtrl', function($scope, $log) {

});
