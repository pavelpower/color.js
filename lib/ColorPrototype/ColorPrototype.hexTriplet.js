
//#include ColorPrototype.valueOf.js

/**
 * @name hexTriplet
 * @method hexTriplet get color in hex string
 * @methodOf ColorPrototype
 * @return {String} color in hex string
 */

//#if ie6
ColorPrototype.hexTriplet =  function () {
    return '#' + ('00000' + this.getValue().toString(16)).substr(-6);
};
//#endif

if ('01'.substr(-1) !== '1') {
    //#if not ie6
    ColorPrototype.hexTriplet = function () {
        var str = this.getValue().toString(16);
        return '#' + (new Array( str.length < 6 ? 6 - str.length + 1 : 0)).join('0') + str;
    };
    //#endif
}
