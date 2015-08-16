'use strict';
// console.log('config app');

angular.module('myApp')

/***
 *        /$$     /$$$$$$   /$$$$$$  /$$      /$$ /$$$$$$$  /$$$$$$ /$$       /$$$$$$$$
 *      /$$$$$$  /$$__  $$ /$$__  $$| $$$    /$$$| $$__  $$|_  $$_/| $$      | $$_____/
 *     /$$__  $$| $$  \__/| $$  \ $$| $$$$  /$$$$| $$  \ $$  | $$  | $$      | $$
 *    | $$  \__/| $$      | $$  | $$| $$ $$/$$ $$| $$$$$$$/  | $$  | $$      | $$$$$
 *    |  $$$$$$ | $$      | $$  | $$| $$  $$$| $$| $$____/   | $$  | $$      | $$__/
 *     \____  $$| $$    $$| $$  | $$| $$\  $ | $$| $$        | $$  | $$      | $$
 *     /$$  \ $$|  $$$$$$/|  $$$$$$/| $$ \/  | $$| $$       /$$$$$$| $$$$$$$$| $$$$$$$$
 *    |  $$$$$$/ \______/  \______/ |__/     |__/|__/      |______/|________/|________/
 *     \_  $$_/
 *       \__/
 *
 */

.config( [
    '$compileProvider',
    function( $compileProvider ) {
       // $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
	 	// $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    }
])

/***
 *     /$$$$$$$  /$$$$$$$$ /$$$$$$$$ /$$$$$$  /$$   /$$ /$$    /$$$$$$$$       /$$   /$$    /$$$$$$  /$$   /$$
 *    | $$__  $$| $$_____/| $$_____//$$__  $$| $$  | $$| $$   |__  $$__/      |__/ /$$$$   /$$__  $$| $$$ | $$
 *    | $$  \ $$| $$      | $$     | $$  \ $$| $$  | $$| $$      | $$          /$$|_  $$  | $$  \ $$| $$$$| $$
 *    | $$  | $$| $$$$$   | $$$$$  | $$$$$$$$| $$  | $$| $$      | $$         | $$  | $$  |  $$$$$$/| $$ $$ $$
 *    | $$  | $$| $$__/   | $$__/  | $$__  $$| $$  | $$| $$      | $$         | $$  | $$   >$$__  $$| $$  $$$$
 *    | $$  | $$| $$      | $$     | $$  | $$| $$  | $$| $$      | $$         | $$  | $$  | $$  \ $$| $$\  $$$
 *    | $$$$$$$/| $$$$$$$$| $$     | $$  | $$|  $$$$$$/| $$$$$$$$| $$         | $$ /$$$$$$|  $$$$$$/| $$ \  $$
 *    |_______/ |________/|__/     |__/  |__/ \______/ |________/|__/         |__/|______/ \______/ |__/  \__/
 *
 *
 *
 */
.config(function($translateProvider) {

	// Our translations will go in here
	$translateProvider.preferredLanguage('zh-TW');

})

/***
 *     /$$$$$$$  /$$        /$$$$$$   /$$$$$$  /$$   /$$       /$$   /$$ /$$$$$$
 *    | $$__  $$| $$       /$$__  $$ /$$__  $$| $$  /$$/      | $$  | $$|_  $$_/
 *    | $$  \ $$| $$      | $$  \ $$| $$  \__/| $$ /$$/       | $$  | $$  | $$
 *    | $$$$$$$ | $$      | $$  | $$| $$      | $$$$$/ /$$$$$$| $$  | $$  | $$
 *    | $$__  $$| $$      | $$  | $$| $$      | $$  $$|______/| $$  | $$  | $$
 *    | $$  \ $$| $$      | $$  | $$| $$    $$| $$\  $$       | $$  | $$  | $$
 *    | $$$$$$$/| $$$$$$$$|  $$$$$$/|  $$$$$$/| $$ \  $$      |  $$$$$$/ /$$$$$$
 *    |_______/ |________/ \______/  \______/ |__/  \__/       \______/ |______/
 *
 *
 *
 *      /$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$$$ /$$$$$$  /$$$$$$
 *     /$$__  $$ /$$__  $$| $$$ | $$| $$_____/|_  $$_/ /$$__  $$
 *    | $$  \__/| $$  \ $$| $$$$| $$| $$        | $$  | $$  \__/
 *    | $$      | $$  | $$| $$ $$ $$| $$$$$     | $$  | $$ /$$$$
 *    | $$      | $$  | $$| $$  $$$$| $$__/     | $$  | $$|_  $$
 *    | $$    $$| $$  | $$| $$\  $$$| $$        | $$  | $$  \ $$
 *    |  $$$$$$/|  $$$$$$/| $$ \  $$| $$       /$$$$$$|  $$$$$$/
 *     \______/  \______/ |__/  \__/|__/      |______/ \______/
 *
 *
 *
 */
.config(function(blockUIConfigProvider) {

  	// Change the default overlay message
  	blockUIConfigProvider.message('資料處理中，請稍候...');

  	// Provide a custom template to use
  	// blockUIConfigProvider.template('<div class="block-ui-overlay"> &nbsp;{{ message }}</div>');

  	// Provide a custom template to use
  	// blockUIConfigProvider.templateUrl('partials/global.blockui.html');

  	// Change the default delay to 100ms before the blocking is visible
  	// blockUIConfigProvider.delay(1000);

  	// Disable automatically blocking of the user interface
  	blockUIConfigProvider.autoBlock(false);
})

/***
 *     /$$        /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$$
 *    | $$       /$$__  $$ /$$__  $$ /$$__  $$| $$_____/| $$__  $$
 *    | $$      | $$  \ $$| $$  \__/| $$  \__/| $$      | $$  \ $$
 *    | $$      | $$  | $$| $$ /$$$$| $$ /$$$$| $$$$$   | $$$$$$$/
 *    | $$      | $$  | $$| $$|_  $$| $$|_  $$| $$__/   | $$__  $$
 *    | $$      | $$  | $$| $$  \ $$| $$  \ $$| $$      | $$  \ $$
 *    | $$$$$$$$|  $$$$$$/|  $$$$$$/|  $$$$$$/| $$$$$$$$| $$  | $$
 *    |________/ \______/  \______/  \______/ |________/|__/  |__/
 *
 *
 *
 *      /$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$$$ /$$$$$$  /$$$$$$
 *     /$$__  $$ /$$__  $$| $$$ | $$| $$_____/|_  $$_/ /$$__  $$
 *    | $$  \__/| $$  \ $$| $$$$| $$| $$        | $$  | $$  \__/
 *    | $$      | $$  | $$| $$ $$ $$| $$$$$     | $$  | $$ /$$$$
 *    | $$      | $$  | $$| $$  $$$$| $$__/     | $$  | $$|_  $$
 *    | $$    $$| $$  | $$| $$\  $$$| $$        | $$  | $$  \ $$
 *    |  $$$$$$/|  $$$$$$/| $$ \  $$| $$       /$$$$$$|  $$$$$$/
 *     \______/  \______/ |__/  \__/|__/      |______/ \______/
 *
 *
 *
 *
 *
 */
.config(function(avLogProvider, avLevel) {
	// console.log(avLogProvider.$get());

	var myLogConfig = {
       //set a default log level - this will be used if someone logs under a category that is not defined below
       loglevel: avLevel.DEBUG, //TRACE, DEBUG, INFO, WARN, ERROR
       //these are the configured channels for logging - each channel can have it's own threshold
       //only log statements above the threshould will be output to the underlying $log
       category: {

       	   AppRun: avLevel.DEBUG,

       	   //services
       	   AuthInterceptor: avLevel.DEBUG,
           AuthService: avLevel.DEBUG,

           //controller
           HeaderCtrl: avLevel.DEBUG,
           LoginCtrl: avLevel.DEBUG
       }
   };
   // avLogProvider.$get().setConfig(myLogConfig);

   //in other projects - this works, TODO find out why
   avLogProvider.$get[1]().setConfig(myLogConfig);
   //there is now a convenience method: return AVaughanLogging.get(avLogProvider, myLogConfig);

})

.config(['eehNavigationProvider', function (eehNavigationProvider) {

    // Add nested user links to the "foo" menu.
    eehNavigationProvider
      .menuItem('foo.user', {
          text: 'Me',
          iconClass: 'fa-user'
      })
      .menuItem('foo.user.profile', {
          text: 'User Profile',
          iconClass: 'fa-user',
          href: '/user-profile'
      });

      // Add a menu item that links to "/home" to the "bar" menu.
      eehNavigationProvider
      .menuItem('bar.home', {
          text: 'Home',
          iconClass: 'fa-home',
          href: '/home'
      });
}]);
;