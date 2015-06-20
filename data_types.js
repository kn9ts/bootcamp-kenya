function dataTypes(value) {
    // get the type of the value;
    var type = typeof value;

    // assign the value to send back
    var sendback;

    switch (type) {
        case 'string':
            sendback = value.length;
            break;
        case 'boolean':
            sendback = value;
            break;
        case 'number':
            if (value < 100) {
                sendback = 'less than 100';
            } else if (value == 100) {
                sendback = 'equal to 100';
            } else {
                sendback = 'more than 100';
            }
            break;
        case 'object':
            // check if value is not null since it is also an object
            if (value !== null) {
                var x = 0;

                // use for...in to also cater for object and arrays
                // together
                for (i in value) {
                    if (x == 2) {
                        if (!value[i]) {
                            sendback = value[i];
                        } else {
                            sendback = value[i];
                        }
                    } else {
                        sendback = undefined;
                    }
                    x++;
                }

            } else {
                sendback = 'no value';
            }
            break;
        case 'function':
            sendeback = value(true);
            break;
        case 'undefined':
            sendback = 'no value';
            break;
    }

    return sendback;
}
