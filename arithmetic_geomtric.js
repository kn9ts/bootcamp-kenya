function aritGeo(array) {

    if (array && array.length > 0) {
        var difference = array[1] - array[0];
        var ratio = array[1] / array[0];

        var arithmetic = true;
        var geometric = true;

        for (var i = 0; i < array.length - 1; i++) {

            // Testing for arithmetic
            if (array[i + 1] - array[i] !== difference) {
                arithmetic = false;
            }

            // Testing for geometric
            if (array[i + 1] / ratio !== array[i]) {
                geometric = false;
            }
        }

        if (arithmetic === true) {
            return "Arithmetic";
        }
        else if (geometric === true) {
            return "Geometric";
        }
        else if (arithmetic === false || geometric === false) {
            return -1;
        }
        else if (array.length == 0) {
            return 0;
        }
    }
    else {
        return 0;
    }

}
