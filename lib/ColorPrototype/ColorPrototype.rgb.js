
//#include ColorPrototype.rgbData.js

/**
 * @name rgb
 * @method rgb get string rgb color
 * @methodOf ColorPrototype
 * @return {String} string call rgb function
 */

ColorPrototype.rgb = function () {
    return 'rgb(' + this.rgbData().join(',') + ')';
};
