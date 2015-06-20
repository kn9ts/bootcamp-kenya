Array.prototype.indexFor = function(value) {
    var array = this;
    for (var x = 0; x < array.length; x++) {
        if (value === array[x]) {
            return Number(x);
        }
    }

    return -1;
};
