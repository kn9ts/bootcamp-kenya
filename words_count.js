function words(sentense) {
    var words = sentense.split(/(\t|\s|\n)/g);

    words = words.filter(function(word) {
        return word !== " ";
    })

    var collection = {};
    for (x = 0; x < words.length; x++) {
        var word = words[x];
        var results = words.filter(function(value) {
            return value == word;
        })
        collection[word] = results.length
    }

    return collection;
}
