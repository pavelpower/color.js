
/**
 * @name setValue
 * @method setValue set the color by Number
 * @methodOf ColorPrototype
 * @param {number} value
 * @return {number} int color
 */

ColorPrototype.setValue = function (value) {
    this.channels.splice(
        0, 3,
        value >>> 0x10,
        (value & 0xFF00) / 0x100,
        value & 0xFF
    );
};