angular.module("app", ['ngRoute']).factory('$exceptionHandler',
    function() {
        return function(exception, cause) {
            exception.message += 'Angular Exception: "' + cause + '"';
            throw exception;
        };
    }
);