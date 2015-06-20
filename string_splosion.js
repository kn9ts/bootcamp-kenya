function StringSplosion(string) {
    this.string = string;

    this.manipulate = function() {
        var string = this.string;
        var length = string.length;
        var splosion_string = '';
        for (x = 0; x <= length; x++) {
            splosion_string += string.substr(0, x);
        }

        return splosion_string;
    }
}
