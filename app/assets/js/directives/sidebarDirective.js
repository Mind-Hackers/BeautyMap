angular.module('myApp.directives')

.directive('sidebarDirective', function() {

    return {
        link: function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                if (newVal) {
                    //show
                    element.addClass('toggled');
                } else {
                    //hide
                    element.removeClass('toggled');
                }
            });
        }
    };
});
