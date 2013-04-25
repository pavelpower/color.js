/**
 * Prototype of color
 * User: pavpaw
 * Date: 25.04.13
 * Time: 11:33
 * To change this template use File | Settings | File Templates.
 */

//TODO: disband this function the individual modules

"use strict";

var colorProto = function() {};

// color per se is the number of
colorProto.prototype = new Number();

colorProto.toString = function () {
    return this[this.TO_STRING_METHOD]();
};

colorProto.valueOf = colorProto.getValue = function () {
    var channels = this.channels;
    return (
        (channels[0] * 0x10000) |
            (channels[1] * 0x100  ) |
            channels[2]
        );
};

colorProto.setValue = function (value) {
    this.channels.splice(
        0, 3,

        value >>> 0x10,
        (value & 0xFF00) / 0x100,
        value & 0xFF
    );
};

colorProto.hexTriplet = ('01'.substr(-1) === '1' ?
    // pad 6 zeros to the left
    function () {
        return '#' + ('00000' + this.getValue().toString(16)).substr(-6);
    }
    : // IE doesn't support substr with negative numbers
    function () {
        var str = this.getValue().toString(16);
        return '#' + (new Array( str.length < 6 ? 6 - str.length + 1 : 0)).join('0') + str;
    }
    );

colorProto.css = function () {
    var color = this;
    return color.channels[3] === 1 ? color.hexTriplet() : color.rgba();
};

colorProto.RGBtoHSL = function (rgb) {
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

colorProto.HSLtoRGB = function (hsl) {
    // in JS 1.7 use: var [h, s, l] = hsl;
    var h = hsl[0],
        s = hsl[1],
        l = hsl[2],

        r, g, b,

        hue2rgb = function (p, q, t){
            if (t < 0) {
                t += 1;
            }
            if (t > 1) {
                t -= 1;
            }
            if (t < 1/6) {
                return p + (q - p) * 6 * t;
            }
            if (t < 1/2) {
                return q;
            }
            if (t < 2/3) {
                return p + (q - p) * (2/3 - t) * 6;
            }
            return p;
        };

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var
            q = l < 0.5 ? l * (1 + s) : l + s - l * s,
            p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [r * 0xFF, g * 0xFF, b * 0xFF];
};

colorProto.rgbData = function () {
    return this.channels.slice(0, 3);
};

colorProto.hslData = function () {
    return Color.RGBtoHSL(this.rgbData());
};

colorProto.rgb = function () {
    return 'rgb(' + this.rgbData().join(',') + ')';
};

colorProto.rgba = function () {
    return 'rgba(' + this.channels.join(',') + ')';
};

colorProto.hsl = function () {
    var hsl = this.hslData();
    return 'hsl(' + hsl[0] * 360 + ',' + (hsl[1] * 100) + '%,' + (hsl[2] * 100) + '%)';
};

colorProto.hsla = function () {
    var hsl = this.hslData();
    return 'hsla(' + hsl[0] * 360 + ',' + (hsl[1] * 100) + '%,' + (hsl[2] * 100) + '%,' + this.channels[3] + ')';
};