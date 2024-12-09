const reverseString = function(input) {

let einzeln = input.split("") ;
let backwards = "" ;

for(let i = einzeln.length -1; i >= 0; i--) {

    backwards += einzeln[i];

}

return backwards;

};

console.log(reverseString("test"));

// Do not edit below this line
module.exports = reverseString;
