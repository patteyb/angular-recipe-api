(function() {
    angular
    .module('exceptionOverwrite', [])
    .factory('$exceptionHandler', [$log, 'logErrorsToBackend', function($log, logErrorsToBackend) {
        return function myExceptionHandler(exception, cause) {
            logErrorsToBackend(exception, cause);
            $log.warn(exception, cause);
            alert(exception.message);
        };
    }]);
})();