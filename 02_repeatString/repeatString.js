const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }
    long_str = '';
    for (let i = 0; i < num; i++) {
        long_str += str;
    }
    return long_str;
};

// Do not edit below this line
module.exports = repeatString;
