
(function(Color) {

    var colorDict = {};

    Color.define = function (color, rgb) {
        colorDict[color['toLowerCase']()] = rgb;
    };

    (Color.clearColors = function () {
        colorDict = {
            transparent: [0, 0, 0, 0]
        };
    })();


    Color.get = function (color) {
        color = color['toLowerCase']();

        if (Object.prototype.hasOwnProperty.call(colorDict, color)) {
            return Color.apply(null, [].concat(colorDict[color]));
        }

        return null;
    };

}).call(this, Color);