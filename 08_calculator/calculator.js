const add = function() {
	
  return(arguments[0] + arguments[1]);

};

const subtract = function() {

  return(arguments[0] - arguments[1]);
	
};

const sum = function(input) {

  let sum = 0;

  for(let i = 0; i < input.length ; i++){
    sum += input[i];
  }

  return(parseInt(sum));
	
};

const multiply = function(input) {

  let mult = input[0];

  for(let i = 1; i < input.length ; i++){
    mult *= input[i];
  }

  return(parseInt(mult));

};

const power = function(input, times) {

  let pow = input;
  
  for(let i = 1; i < times ; i++){
    pow *= input;
  }

  return(parseInt(pow));

	
};

const factorial = function(input) {

  let fac = input;
  const times = input;

  if(input == 0){
    return(1);
  }

  for(let i = 1; i < times; i++) {
    input--;
    fac *= input;
    ;
  }

  return(parseInt(fac));


	
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
