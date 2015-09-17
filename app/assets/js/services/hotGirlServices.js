"use strict";

angular.module('myApp.services')

    .factory('HotGirlService', ['$http', 'avLog', 'ServerConfig',
        function($http, avLog, ServerConfig) {


            var logger = avLog.getLogger('HotGirlService');
            logger.debug('init HotGirlService');

            return {

                getList : function(success,error) {
                    // var apiEndpoint = ServerConfig.endpoint + 'api/hotgirl/list';
                    // var apiEndpoint = 'http://beautymap.bigd.tw/app/libs/angularjs-google-maps/testapp/scripts/starbucks.json';
                    var apiEndpoint = 'http://isplanet.dyndns-office.com:1880/editor/BeautyMap/app/libs/angularjs-google-maps/testapp/scripts/starbucks.json';

                    return $http({
                        url: apiEndpoint,
                        method: 'GET',
                        data: ''

                    }).success(function(data, status, headers, config) {

                        logger.debug('suc response of getList');

                        // logger.debug(data);

                        success(data, status, headers, config);

                    }).error(function(data, status, headers, config) {
                        logger.error('err response of getList');
                        error(data, status, headers, config)
                    });
                }

            };

        }
    ])
