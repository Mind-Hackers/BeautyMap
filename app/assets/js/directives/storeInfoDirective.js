angular.module('myApp.directives')

.directive('storeInfo', function() {

    var StoreInfo = function(s, e, a) {
      this.scope = s;
      this.element = e;
      this.attrs = a;

      this.show = function() {
        this.element.css('display', 'block');
        this.scope.$apply();
      }
      this.hide = function() {
        this.element.css('display', 'none');
      }
    };

    return {
      templateUrl: 'store-info.html',// The ng-template id
      link: function(scope, e, a) {
        alert('xxxxxx');
        scope.storeInfo = new StoreInfo(scope, e, a);
      }
    };

});

