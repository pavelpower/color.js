
(function(Color) {

    function pushColor(rgba) {
        this.push(Color.create(rgba[0],rgba[1],rgba[2],rgba[3]));
    }

    /**
     * @name gradient
     * @method get gradient by array of Colors
     * @methodOf Color
     * @return {Array} of Colors
     */
    Color.gradient = function (colorA, colorB, steps) {
        var res = [], Step = [], Val,
            cA, cB,
            i, j, len;

        cA = (new Color(colorA)).channels;
        cB = (new Color(colorB)).channels;
        steps -= 1;

        for(j = 0; j < 4; j++) {
            Step[j] = (( Math.max(cA[j], cB[j]) - Math.min(cA[j], cB[j]) ) / steps);
        }

        pushColor.call(res, cA);

        Val = cA.splice();

        len = (steps - 1);

        for (i = 0; i < len; i++) {
            for (j = 0; j < 4; j++) {
                Val[j] = (cA[j] < cB[j]) ? Val[j] + Math.round(Step[j]) : Val[j] - Math.round(Step[j]);
            }
            pushColor.call(res, Val);
        }

        pushColor.call(res, cB);

        return res;
    };

}).call(this, Color);


