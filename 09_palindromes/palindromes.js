const palindromes = function (str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '') === str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
