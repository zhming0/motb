define([], function(){
    var Single = function() {
        var instances = {};
        /*
         * Refer to: http://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
         */
        var constructor = function(cls, args) {
            function F() {
                return cls.apply(this, args);
            }
            F.prototype = cls.prototype;
            return new F();
        };
        return function(cls, args) {
            if (instances[cls]) {
                if (instances[cls].teardown) 
                    instances[cls].teardown();
            } 
            return instances[cls] = constructor(cls, args);
        };
    };
    return Single(); 
});
