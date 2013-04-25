

Color.rgb = function (r, g, b, a) {
    return new Color(r, g, b, typeof a !== 'undefined' ? a : 1);
};
