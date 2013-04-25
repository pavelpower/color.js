/**
 * @name RGBtoHSL
 * @method RGBtoHSL set the color by Array
 * @methodOf ColorPrototype
 * @param {Array} rgb [r=== [0..255], g === [0..255], b === [0..255]]
 * @return {Array} color in HSL [h, s, l]
 */

ColorPrototype.RGBtoHSL = function (rgb) {
    // in JS 1.7 use: var [r, g, b] = rgb;
    var r = rgb[0],
        g = rgb[1],
        b = rgb[2];

    r /= 255;
    g /= 255;
    b /= 255;

    var max = math.max(r, g, b),
        min = math.min(r, g, b),
        h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
};