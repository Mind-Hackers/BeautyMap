angular.module('myApp.controllers').controller('HomeCtrl', ['$rootScope', '$scope', 'avLog', 'HotGirlService', 'blockUI', '$timeout', 'StreetView',
    function($rootScope, $scope, avLog, HotGirlService, blockUI, $timeout, StreetView) {

        var logger = avLog.getLogger('HomeCtrl');

        //user local
        $scope.lat = "0";
        $scope.lng = "0";
        $scope.accuracy = "0";

        $scope.error = "";

        /***
         *     /$$   /$$  /$$$$$$        /$$      /$$  /$$$$$$  /$$$$$$$
         *    | $$$ | $$ /$$__  $$      | $$$    /$$$ /$$__  $$| $$__  $$
         *    | $$$$| $$| $$  \__/      | $$$$  /$$$$| $$  \ $$| $$  \ $$
         *    | $$ $$ $$| $$ /$$$$      | $$ $$/$$ $$| $$$$$$$$| $$$$$$$/
         *    | $$  $$$$| $$|_  $$      | $$  $$$| $$| $$__  $$| $$____/
         *    | $$\  $$$| $$  \ $$      | $$\  $ | $$| $$  | $$| $$
         *    | $$ \  $$|  $$$$$$/      | $$ \/  | $$| $$  | $$| $$
         *    |__/  \__/ \______/       |__/     |__/|__/  |__/|__/
         *
         *
         *
         */

        var map = null;
        $scope.dynMarkers = [];
        $scope.$on('mapInitialized', function(event, evtMap) {
        	//get google map instance
            map = evtMap;

            $scope.getList(function(markers) {
                logger.debug('databinding_callback');

                for (var i = 0; i < markers.length; i++) {

                    var markerData = markers[i];
                    // console.log(markerData);
                    markerData.position = new google.maps.LatLng(
                        markerData.latitude, markerData.longitude);

                    // store.title = store.name;

                    var marker = new google.maps.Marker(markerData);
                    google.maps.event.addListener(marker, 'click', function() {
                        logger.debug('click marker');

                        //marker info
                        $scope.store = this;
                        $scope.store.visible = true;

                        StreetView.getPanorama(map).then(function(panoId) {
                            $scope.panoId = panoId;
                        });
                        map.setZoom(18);
                        map.setCenter(this.getPosition());


                    });
                    google.maps.event.addListener(map, 'click', function() {
                        logger.debug('click map area');
                        if ($scope.store != null) {
                            $scope.hideMarkerInfo($scope.store);
                        }

                    });


                    //add marker
                    $scope.dynMarkers.push(marker);
                }
                //set marker cluster
                $scope.markerClusterer =
                    new MarkerClusterer($scope.map, $scope.dynMarkers, {});
            });

        });

        $scope.showStreetView = function() {
            StreetView.setPanorama(map, $scope.panoId);
            $scope.hideMarkerInfo($scope.store);
        };
        $scope.showHybridView = function() {
            map.setMapTypeId(google.maps.MapTypeId.HYBRID);
            map.setTilt(45);
            $scope.hideMarkerInfo($scope.store);
        };
        $scope.showMarkerInfo = function(store) {
            logger.debug('show marker info');
            store.visible = true;
        };
        $scope.hideMarkerInfo = function(store) {
            logger.debug('hide marker info');
            store.visible = false;
        }

        /***
         *      /$$$$$$  /$$$$$$$$  /$$$$$$        /$$        /$$$$$$   /$$$$$$   /$$$$$$  /$$
         *     /$$__  $$| $$_____/ /$$__  $$      | $$       /$$__  $$ /$$__  $$ /$$__  $$| $$
         *    | $$  \__/| $$      | $$  \ $$      | $$      | $$  \ $$| $$  \__/| $$  \ $$| $$
         *    | $$ /$$$$| $$$$$   | $$  | $$      | $$      | $$  | $$| $$      | $$$$$$$$| $$
         *    | $$|_  $$| $$__/   | $$  | $$      | $$      | $$  | $$| $$      | $$__  $$| $$
         *    | $$  \ $$| $$      | $$  | $$      | $$      | $$  | $$| $$    $$| $$  | $$| $$
         *    |  $$$$$$/| $$$$$$$$|  $$$$$$/      | $$$$$$$$|  $$$$$$/|  $$$$$$/| $$  | $$| $$$$$$$$
         *     \______/ |________/ \______/       |________/ \______/  \______/ |__/  |__/|________/
         *
         *
         *
         */
        $scope.showUserLocalPosition = function(position) {
            $scope.lat = position.coords.latitude;
            $scope.lng = position.coords.longitude;
            $scope.accuracy = position.coords.accuracy;
            $scope.$apply();

            var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
            $scope.map.setCenter(latlng);
        };
        $scope.getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.showUserLocalPosition, $scope.showError);
            } else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        }
        $scope.getLocation();

        $scope.showError = function(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        };

        /***
         *      /$$$$$$  /$$$$$$$  /$$$$$$
         *     /$$__  $$| $$__  $$|_  $$_/
         *    | $$  \ $$| $$  \ $$  | $$
         *    | $$$$$$$$| $$$$$$$/  | $$
         *    | $$__  $$| $$____/   | $$
         *    | $$  | $$| $$        | $$
         *    | $$  | $$| $$       /$$$$$$
         *    |__/  |__/|__/      |______/
         *
         *
         *
         */

        $scope.getList = function(databinding_callback) {
            HotGirlService.getList(
                function(data, status, headers, config) {
                    logger.debug('success to call getList api');

                    // blockUI.stop();
                    databinding_callback(data);

                },
                function(data, status, headers, config) {
                    blockUI.stop();
                    logger.debug('fail to call getlist api');
                });
        };
    }
]);
