
/**
 * @name getHashRGBA
 * @method get object with properties r,g,b,a
 * @methodOf Color
 * @return {Object}
 */
Color.getHashRGBA = function () {
    return {
        r: this.channels[0],
        g: this.channels[1],
        b: this.channels[2],
        a: this.channels[3]
    }
};
