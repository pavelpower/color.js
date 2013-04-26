
/**
 * @name css
 * @method css get color in hex string
 * @methodOf ColorPrototype
 * @return {String} color in hex string
 */
ColorPrototype.css = function () {
    var color = this;
    return color.channels[3] === 1 ? color.hexTriplet() : color.rgba();
};