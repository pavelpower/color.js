
//#include ColorPrototype.hslData.js

/**
 * @name hsl
 * @method hsl get string HSL color
 * @methodOf ColorPrototype
 * @return {String} string call HSL function
 */

ColorPrototype.hsl = function () {
    var hsl = this.hslData();
    return 'hsl(' + hsl[0] * 360 + ',' + (hsl[1] * 100) + '%,' + (hsl[2] * 100) + '%)';
};