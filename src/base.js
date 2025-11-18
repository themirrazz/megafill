// MMM      MMM EEEEEEEEE   GGGGGGG    AAAAA
// MMMMM   MMMM EE         GGG        AA   AA
// MMMMMMMMMMMM EEEEEEE   GG    GGG  AA     AA
// MMM MMMM MMM EEEEEE    GG      GG AAAAAAAAA
// MMM      MMM EEE        GGG   GGG AA     AA
// MMM      MMM EEEEEEEEE   GGGGGGG  AA     AA
// 
// https://github.com/themirrazz/megafill
// all rights reserved

if(typeof Array.prototype.forEach !== 'function') {
    Array.prototype.forEach = function (f) {
        for(var i = 0; i < this.length; i++) {
            if(i in this) {
                f(this[i], i, this);
            }
        }
    };
}

if(typeof Array.prototype.push !== 'function') {
    Array.prototype.push = function () {
        for(var i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
        }
        return this.length;
    };
}

if(typeof Array.prototype.pop !== 'function') {
    Array.prototype.pop = function () {
        if(this.length > 0) {
            var item = this[this.length - 1];
            this[this.length - 1] = undefined;
            delete this[this.length - 1];
            return item;
        }
        return undefined;
    };
}

if(typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function (e, i) {
        if(!i || isNaN(i)) { i = 0; }
        if(typeof i !== 'number') { i = 0 }
        if(i < 0) {
            i = this.length + i;
            if(i < 0) { i = 0 }
        }
        for(null; i < this.length; i++) {
            if(this[i] === e) {
                return i;
            }
        }
        return -1;
    };
}

if(typeof Array.prototype.includes !== 'function') {
    Array.prototype.includes = function (e) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === e) {
                return true;
            }
            if(typeof e === 'number' && typeof this[i] === 'number' && isNaN(e) && isNaN(this[i])) {
                return true;
            }
        }
        return false;
    };
}

if(typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function (f) {
        var res = [];
        for(var i = 0; i < this.length; i++) {
            res.push(f(this[i], i, this));
        }
        return res;
    };
}

if(typeof Object.prototype.hasOwnProperty !== 'function') {
    Object.prototype.hasOwnProperty = function (i) {
        if(i in this) {
            if(typeof this.constructor === 'function') {
                if(typeof this.constructor.prototype === 'object') {
                    if(i in this.constructor.prototype[i]) {
                        return false;
                    }
                }
            }
            return true; 
        }
        return false;
    }
}

if(typeof Object.keys !== 'function') {
    Object.keys = function (object) {
        if(typeof object !== 'object') {
            throw new TypeError('Passed item was not an object');
        }
        var keys = [];
        var key;
        for(key in object) {
            if(object.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    };
};

if(typeof Object.entries !== 'function') {
    Object.entries = function (object) {
        return Object.keys(object).map(function(k) { return [k, object[k]] });
    };
}

if(typeof Object.values !== 'function') {
    Object.values = function (object) {
        return Object.entries(object).map(function (e) { return e[1]; });
    };
}

if(typeof String.prototype.charAt !== 'function') {
    String.prototype.charAt = function (i) {
        return this.substring(i, i+1);
    };
}

if(typeof String.prototype.at !== 'function') {
    String.prototype.at = function(i) {
        if(i < 0) {
            i = this.length - (0 - i);
        }
        return this.charAt(i);
    };
}

if(typeof String.prototype.trimEnd !== 'function') {
    String.prototype.trimEnd = function () {
        var char;
        for(var i = this.length; i > 0; i--) {
            char = this.charAt(i)
            if(char !== " " && char !== "\n" && char !== '\t' && char !== '\r') {
                break;
            }
        };
        return this.substring(0, i + 1);
    };
}

if(typeof String.prototype.trimStart !== 'function') {
    String.prototype.trimStart = function () {
        var char;
        for(var i = 0; i < this.length; i++) {
            char = this.charAt(i)
            if(char !== " " && char !== "\n" && char !== '\t' && char !== '\r') {
                break;
            }
        };
        return this.substring(i);
    };
}

if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.trimStart().trimEnd();
    };
}