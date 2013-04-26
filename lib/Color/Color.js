
//#include ../ColorPrototype/ColorPrototype.js

/**
 * class Color
 * Color.get("violet")
 * Color(0xEE82EE)
 * Color("#EE82EE")
 * Color("EE82EE")
 * Color(0xEE, 0x82, 0xEE)
 * Color("EE", "82", "EE")
 * Color(238, 130, 238)
 * Color.rgb(238, 130, 238)
 * Color.hsl(0.8333333333333334, 0.7605633802816902, 0.7215686274509804)
 * @constructor
 * @param {number} r [0..255] || h [0.0..1]
 * @param {number} g [0..255] || s [0.0..1]
 * @param {number} b [0..255] || l [0.0..1]
 * @param {number} a [0..255]
 * @param {string} r color of name, or hex-string
 * @param {string} g hex-string
 * @param {string} b hex-string
 */
var Color;

Color = function Color(r, g, b, a) {
    var
        color = this,
        args = arguments.length,
        parseHex = function (h) {
            return parseInt(h, 16);
        };

    if (args < 3) { // called as Color(color [, alpha])
        if (typeof r === 'string') {
            r = r.substr(r.indexOf("#") + 1);
            var threeDigits = r.length === 3;
            r = parseHex(r);
            threeDigits &&
            (r = (((r & 0xF00) * 0x1100) | ((r & 0xF0) * 0x110) | ((r & 0xF) * 0x11)));
        }

        args === 2 && // alpha specifed
        (a = g);

        g = (r & 0xFF00) / 0x100;
        b = r & 0xFF;
        r = r >>> 0x10;
    }

    if (!(color instanceof Color)) {
        return new Color(r, g, b, a);
    }

    this.channels = [
        typeof r === 'string' && parseHex(r) || r,
        typeof g === 'string' && parseHex(g) || g,
        typeof b === 'string' && parseHex(b) || b,
        (typeof a !== 'string' && typeof a !== "number") && 1 ||
            typeof a === 'string' && parseFloat(a) || a
    ];
};

Color.prototype = ColorPrototype;

//#include ./Color.rgb.js

Color.create = Color.rgb;

//#include ./Color.define.js

/**
 * @method create function alias for create color
 * @return {Object} object typeof Color
 * @param {number} r [0..255] || h [0.0..1]
 * @param {number} g [0..255] || s [0.0..1]
 * @param {number} b [0..255] || l [0.0..1]
 * @param {number} a [0..255]
 */

//#include ./Color.parse.js

//#include ./Color.random.js

//#include ./Color.hsl.js

//#include ./Color.cssColors.js

//#include ./Color.gradient.js
