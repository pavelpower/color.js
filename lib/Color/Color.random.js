
Color.random = function (rangeStart, rangeEnd) {
    typeof rangeStart === 'string' &&
        (rangeStart = Color.get(rangeStart)) &&
    (rangeStart = rangeStart.getValue());
    typeof rangeEnd === 'string' &&
        (rangeEnd = Color.get(rangeEnd)) &&
    (rangeEnd = rangeEnd.getValue());

    var floor = Math.floor,
        random = Math.random;

    rangeEnd = (rangeEnd || 0xFFFFFF) + 1;
    if (!isNaN(rangeStart)) {
        return new Color(floor((random() * (rangeEnd - rangeStart)) + rangeStart));
    }
    // random color from #000000 to #FFFFFF
    return new Color(floor(random() * rangeEnd));
};