Array.prototype.toTwenty = function() {
    var new_array = [];
    for (var x = 1; x <= 20; x++) {
        new_array.push(x);
    }

    return new_array;
};

Array.prototype.toForty = function() {
    var new_array = [];
    for (var x = 2; x <= 40; x += 2) {
        new_array.push(x);
    }

    return new_array;
};

Array.prototype.toOneThousand = function() {
    var new_array = [];
    for (var x = 10; x <= 1000; x += 10) {
        new_array.push(x);
    }

    return new_array;
};

Array.prototype.search = function(value) {

    var items = this,
        startIndex = 0,
        stopIndex = items.length - 1,
        middle = Math.floor((stopIndex + startIndex) / 2),
        illiterations = 0;

    // Keep searching
    // As long as the middle item is not the value being searched
    // And the start index is not larger than the stop index
    while (items[middle] != value && startIndex < stopIndex) {

        // adjust search area
        // If value is less than the middle value
        if (value < items[middle]) {
            stopIndex = middle - 1;
        }
        // If value is greater than the middle value
        else if (value > items[middle]) {
            startIndex = middle + 1;
        }

        // recalculate middle
        middle = Math.floor((stopIndex + startIndex) / 2);
        illiterations++;
    }

    // It will somehow always end up s the middle value
    // make sure it's the right value
    var results = {
        count:  illiterations,
        index: items[middle] == value ? middle: -1,
        length: items.length
    };

    return results;

};
