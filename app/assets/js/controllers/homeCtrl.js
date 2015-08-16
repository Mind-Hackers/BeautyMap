
angular.module('myApp.controllers').controller('HomeCtrl', ['$rootScope', '$scope', 'avLog', 'HotGirlService', 'blockUI',
  function($rootScope, $scope, avLog, HotGirlService,blockUI) {


    var logger = avLog.getLogger('HomeCtrl');


    $scope.getList = function(){
    	HotGirlService.getList(
				function(data, status, headers, config) {
					logger.debug('success to call getList api');

					// blockUI.stop();

                    if (data.status == 200) {


					} else {

					}
				},
				function(data, status, headers, config) {
					blockUI.stop();
					logger.debug('fail to call getlist api');
				});
    };
    $scope.getList();

}]);
