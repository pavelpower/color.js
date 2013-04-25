
(function(Color) {

    var colorDict;

    /**
     * @method define associate color with name
     * @methodOf Color
     * @param {String} rgb string of hex
     * @param {String} color the name
     */
    Color.define = function (color, rgb) {
        colorDict[color['toLowerCase']()] = rgb;
    };

    /**
     * @method clearColors clear hash the colors associative with name
     * @methodOf Color
     */
    (Color.clearColors = function () {
        colorDict = {
            transparent: [0, 0, 0, 0]
        };
    })();

    /**
     * @method get associate color with name
     * @methodOf Color
     * @return {Object} object typeof Color
     * @param {Color} color
     */
    Color.get = function (color) {
        color = color['toLowerCase']();

        if (Object.prototype.hasOwnProperty.call(colorDict, color)) {
            return Color.apply(null, [].concat(colorDict[color]));
        }

        return null;
    };

    Color.clearColors();

}).call(this, Color);