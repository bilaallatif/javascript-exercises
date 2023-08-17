const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 0) return 0;

    let sum_prev_prev = 0;
    let sum_prev = 1;

    for(let i = 2; i <= num; i++){
        let sum = sum_prev_prev + sum_prev;
        sum_prev_prev = sum_prev;
        sum_prev = sum;
    }
    return sum_prev;
};

// Do not edit below this line
module.exports = fibonacci;
