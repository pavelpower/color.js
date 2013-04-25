
//#include ColorPrototype.hexTriplet.js

/**
 * @name toString
 * @method toString Get the color of a string in the format selected
 * you can call this method with formats .toString('nameMethod', arg1, arg2, arg3, ...)
 * @methodOf ColorPrototype
 * @param {string} method  Name of method default "hexTriplet",
 * @return {string} method
 */

ColorPrototype.toString = function (method) {
    var args = Array.prototype.slice.call(arguments, 1),
        f = this[method || 'hexTriplet']();
    return typeof f === 'function' ? f.apply(this, args) : '';
};
