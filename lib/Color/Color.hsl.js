

Color.hsl = function (h, s, l, a) {
    var rgb = Color.HSLtoRGB([h, s, l]),
        ceil = Math.ceil;
    return new Color(ceil(rgb[0]), ceil(rgb[1]), ceil(rgb[2]), typeof a !== 'undefined' ? a : 1);
};
