(function() {
    angular
    .module('exceptionOverwrite', [])
    .factory('$exceptionHandler', ['$log', function($log) {
        return function myExceptionHandler(exception, cause) {
            $log.warn(exception, cause);
            alert(exception.message);
        };
    }]);
})();