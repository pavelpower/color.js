
Color.parse = function (color) {
    color = color.replace(/^\s+/g, '') // trim leading whitespace
        ['toLowerCase']();

    if (color[0] === '#') {
        return new Color(color);
    }

    var cssFn = color.substr(0, 3), i;

    color = color.replace(/[^\d,.]/g, '').split(',');
    i     = color.length;

    while (i--) {
        color[i] = color[i] && parseFloat(color[i]) || 0;
    }

    switch (cssFn) {
        case 'rgb': // handle rgb[a](red, green, blue [, alpha])
            return Color.rgb.apply(Color, color); // no need to break;
        case 'hsl': // handle hsl[a](hue, saturation, lightness [, alpha])
            color[0] /= 360;
            color[1] /= 100;
            color[2] /= 100;
            return Color.hsl.apply(Color, color);
    }

    return null;
};