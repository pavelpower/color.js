

//#include Color.getHashRGBA.js

Color.gradient = function (colorA, colorB, steps) {
    var res = [],
        rStep, gStep, bStep, aStep,
        cA, cB,
        rVal, gVal, bVal, aVal,
        i, len;

    cA = colorA.getHashRGBA;
    cB = colorB.getHashRGBA;
    steps -= 1;

    rStep = ( Math.max(cA.r, cB.r) - Math.min(cA.r, cB.r) ) / steps;
    gStep = ( Math.max(cA.g, cB.g) - Math.min(cA.g, cB.g) ) / steps;
    bStep = ( Math.max(cA.b, cB.b) - Math.min(cA.b, cB.b) ) / steps;
    aStep = ( Math.max(cA.a, cB.a) - Math.min(cA.a, cB.a) ) / steps;

    res.push( Color.create(cA.r, cA.g, cA.b) );

    rVal = cA.r; gVal = cA.g; bVal = cA.b, aVal = cA.a;

    len = (steps - 1);

    for (i = 0; i < len; i++) {
        rVal = (cA.r < cB.r) ? rVal + Math.round(rStep) : rVal - Math.round(rStep);
        gVal = (cA.g < cB.g) ? gVal + Math.round(gStep) : gVal - Math.round(gStep);
        bVal = (cA.b < cB.b) ? bVal + Math.round(bStep) : bVal - Math.round(bStep);
        aVal = (cA.a < cB.a) ? aVal + Math.round(aStep) : aVal - Math.round(aStep);
        res.push( Color.create(rVal, gVal, bVal, aVal) );
    }

    res.push( Color.create(cB.r, cB.g, cB.b, cB.a) );

    return res;
};