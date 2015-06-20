function PrimeChecker(num) {

    this.number;

    if (num !== undefined && typeof parseInt(num) == 'number') {
        this.number = parseInt(num);
    }

    this.isPrime = function() {
        // if the number has been decalered
        if (this.number) {
            // assign it to a
            var number = this.number;

            /* prime numbers are not negative so return false for any negative number */
            if (number < 0) {
                return false;
            }

            /* the greatest divisor of a number other than itself is
            /* half the number hence  the number/2
            /* Math.ceil rounds up to the nearest whole number */

            var middle = Math.ceil(number / 2);

            /* for loop  to check for prime numbers */
            for (var i = 2; i < middle; i++) {
                if (number % i == 0) {
                    return false;
                }
            }

            return true;

        } else {
            return false
        }
    }

}

var no = new PrimeChecker('22')
no.isPrime();
