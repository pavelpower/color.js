
//#include ColorPrototype.RGBtoHSL.js

/**
 * @name hslData
 * @method hslData get color in HSL
 * @methodOf ColorPrototype
 * @return {Array} [h, s, l]
 */

ColorPrototype.hslData = function () {
    return ColorPrototype.RGBtoHSL(this.rgbData());
};
