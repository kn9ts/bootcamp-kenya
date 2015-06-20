function reverseString(string) {
    // split up the characters of a string into an array
    if(string.length !== 0) {

        string = string.toLowerCase();
        var stringCharacters = String(string).split("");

        // get the total numbers of characters
        // which were in the string
        var arrayLength = stringCharacters.length;

        // empty string var to be added characters to it
        var reversedString = '';

        // loop throught the characters appending it to 'reversedString' variable
        for (var x = (arrayLength - 1); x >= 0; x--) {
            reversedString += stringCharacters[x];
        }

        // check for palindromes
        if (reversedString == string) {
            return true;
        } else {
            return reversedString;
        }

    }

    return null;
}

reverseString('anna');