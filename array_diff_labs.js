function findMissing(arr1, arr2) {

    if (arr1.length == 0 || arr2.length == 0) {
        return 0
    }

    // Now get the one which is longer in length
    if (arr1.length > arr2.length) {
        var longerArray = arr1;
        var shorterArray = arr2;
    }
    else {
        var longerArray = arr2;
        var shorterArray = arr1;
    }

    // create new array
    // it will carry all the differences
    var differences = [];

    // Now loop over the longer array of data
    // longerArray == longer array
    for (var x = 0; x <= longerArray.length; x++) {

        // console.log(longerArray[x])
        if (longerArray[x] && shorterArray.indexOf(longerArray[x]) == -1) {
            // console.log(shorterArray[x]);
            // do not add undefined variable
            if (longerArray[x]) differences.push(longerArray[x]);
        }

    }

    if (differences.length == 1) {
        return differences[0];
    }
    else {
        return differences;
    }

}
