
//#include ColorPrototype.RGBtoHSL.js

/**
 * @name rgbData
 * @method rgbData get color in rgb
 * @methodOf ColorPrototype
 * @return {Array} [r, g, b]
 */

ColorPrototype.rgbData = function () {
    return this.channels.slice(0, 3);
};
