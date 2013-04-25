
/**
 * @name rgba
 * @method rgba get string rgba color
 * @methodOf ColorPrototype
 * @return {String} string call rgba function
 */

ColorPrototype.rgba = function () {
    return 'rgba(' + this.channels.join(',') + ')';
};
