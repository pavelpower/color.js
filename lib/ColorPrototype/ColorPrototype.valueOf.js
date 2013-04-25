
/**
 * @name valueOf
 * @method valueOf Get the color of a Number
 * @methodOf ColorPrototype
 * @return {number} int color
 */

ColorPrototype.valueOf = function () {
    var channels = this.channels;
    return ( (channels[0] * 0x10000) | ( channels[1] * 0x100  ) | channels[2] );
};

/**
 * @name getValue
 * @method getValue the alias of valueOf
 * @methodOf ColorPrototype
 * @return {number} int color
 */
ColorPrototype.getValue = ColorPrototype.valueOf;