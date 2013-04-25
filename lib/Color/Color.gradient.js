

// TODO: new method get gradient Colors
function hexToRGB() {}

Color.gradient = function (colorNexA, colorNexB, steps) {
    var res = [],
        rStep, gStep, bStep,
        cA, cB,
        rVal, gVal, bVal,
        i, len;

    cA = hexToRgb(colorNexA);
    cB = hexToRgb(colorNexB);
    steps -= 1;

    rStep = ( Math.max(cA.r, cB.r) - Math.min(cA.r, cB.r) ) / steps;
    gStep = ( Math.max(cA.g, cB.g) - Math.min(cA.g, cB.g) ) / steps;
    bStep = ( Math.max(cA.b, cB.b) - Math.min(cA.b, cB.b) ) / steps;

    res.push( rgbToHex(cA.r, cA.g, cA.b) );

    rVal = cA.r; gVal = cA.g; bVal = cA.b;

    len = (steps - 1);

    for (i = 0; i < len; i++) {
        rVal = (cA.r < cB.r) ? rVal + Math.round(rStep) : rVal - Math.round(rStep);
        gVal = (cA.g < cB.g) ? gVal + Math.round(gStep) : gVal - Math.round(gStep);
        bVal = (cA.b < cB.b) ? bVal + Math.round(bStep) : bVal - Math.round(bStep);
        res.push( rgbToHex(rVal, gVal, bVal) );
    }

    res.push( rgbToHex(cB.r, cB.g, cB.b) );

    return res;
};