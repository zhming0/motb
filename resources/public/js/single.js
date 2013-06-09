define([], function() {
    var Single = function() {
        var instances = {};
        var children = {};
        var father = {};
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

        var destroy = function(name) {
            if (instances[name]) {
                if (instances[name].teardown)
                    instances[name].teardown();
                if (children[name]) {
                    for (var i = 0; i < children[name].length; i++)
                        destroy(children[name][i]);
                    children[name] = undefined;
                }
            }
            father[name] = undefined;
        };

        return function(name, cls, args, opts) {
            if (typeof(opts) == "undefined") opts = {};
            var prt = opts['parent'];
            /*
             * When refresh be set to true, Single will not generate new instance to replace old one.
             * */
            var refresh = opts['refresh'] ? true : opts['refresh']; 

            if (refresh == false && instances[name]) {
                return instances[name];
            }

            /*
             * Remove itselfs from father's collection
             */
            if (instances[name]) {
                var idx = children[father[name]].indexOf(name);
                children[father[name]].splice(idx);
            }
            /*
             * Destroy all its decendants.
             */
            destroy(name);
            if (!prt) prt = " "; // Use space as root
            if (!children[prt]) children[prt] = [];
            children[prt].push(name);
            father[name] = prt;
            return instances[name] = constructor(cls, args);
        };
    };
    return Single(); 
});
