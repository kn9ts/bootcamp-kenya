function Car(name, model, type) {
    this.name = name || 'General';
    this.model = model || 'GM';
    this.type = type || 'saloon';
    this.speed = '0 km/h';
    this.isSaloon = this.type == 'trailer' ? false : true;
    this.numOfDoors = 4;
    this.numOfWheels = this.type == 'trailer' ? 8 : 4;

    function inArray(haystack, needle) {
        for (var i = 0, l = haystack.length; i < l; i++) {
            if (haystack[i] == needle) {
                return true;
            }
        }
        return false;
    }

    if (inArray(['Porshe', 'Koenigsegg'], this.name)) {
        this.numOfDoors = 2;
    }

    this.drive = function(gear) {
        if (this.isSaloon)) {
            this.speed = 250 + ' km/h';
        }
        else {
            this.speed = 77 + ' km/h';
        }

        for(var x = gear; x > 0; x--) {
            var acceleration = x;
            if(speed) {
                speed += speed * acceleration;
            }
            else {
                speed = acceleration;
            }
        }
        return speed
        // this.speed = speed;
        // return this;
    }
}
