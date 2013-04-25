

/**
 * @name rgb
 * @method rgb create color object by params
 * @methodOf Color
 * @return {Color} object
 */
Color.rgb = function (r, g, b, a) {
    return new Color(r, g, b, typeof a !== 'undefined' ? a : 1);
};
