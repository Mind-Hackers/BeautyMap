angular.module('myApp.directives')

.directive('sidebarDirective', function() {
    return {
        link: function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                if (newVal) {
                    element.addClass('toggled');

                } else {
                    element.removeClass('toggled');
                }
            });
        }
    };
});
