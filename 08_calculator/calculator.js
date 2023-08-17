const add = function(op1, op2) {
  return op1 + op2;
};

const subtract = function(op1, op2) {
	return op1 - op2;
};

const sum = function(opArr) {
  return opArr.reduce((total, current) => total + current, 0);
};

const multiply = function(opArr) {
  return opArr.reduce((total, current) => total * current, 1);
};

const power = function(op1, op2) {
	return op1 ** op2;
};

const factorial = function(op) {
	if(op == 0) return 1;
  if(op == 1) return 1;
  return op * factorial(op - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
