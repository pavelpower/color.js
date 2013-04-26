
/**
 * @name hsla
 * @method hsla get string HSLA color
 * @methodOf ColorPrototype
 * @return {String} string call HSLA function
 */
ColorPrototype.hsla = function () {
    var hsl = this.hslData();
    return 'hsla(' + hsl[0] * 360 + ',' + (hsl[1] * 100) + '%,' + (hsl[2] * 100) + '%,' + this.channels[3] + ')';
};
