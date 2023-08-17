const findTheOldest = function(arr) {
    let age_arr = arr.map((person) => person.yearOfDeath - person.yearOfBirth);
    let oldest_age = Math.max(...age_arr);
    let oldest_person = arr.find((person) => person.yearOfDeath - person.yearOfBirth == oldest_age);
    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
