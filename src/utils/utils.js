angular.module('ngui.utils', [])
.factory('utils', ['$q', function($q){
  var utils = {
    deferred: function(callback){
      var deferred = $q.defer();
      callback(deferred);
      return deferred.promise;
    },
    isNull: function(val){
      return val === undefined || val === null;
    },
    isBoolean: function(val){
      return typeof val === 'boolean';
    },
    defaultVal: function(obj, attr, defVal){
      if(!obj.hasOwnProperty(attr)){
        obj[attr] = defVal;
      }
    },
    extendIf: function () {
      var copyIsArray, copy, name, options, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;
      if ( !angular.isObject(target) && !angular.isFunction(target) ) {
        target = {};
      }
      if ( i === length ) {
        target = this;
        i--;
      }
      for ( ; i < length; i++ ) {
        if ( (options = arguments[ i ]) != null ) {
          for ( name in options ) {
            copy = options[ name ];
            if ( target === copy ) {
              continue;
            }
            if (!target.hasOwnProperty(name)) {
              target[ name ] = copy;
            }
          }
        }
      }
      return target;
    }
  };
  return utils;
}]);