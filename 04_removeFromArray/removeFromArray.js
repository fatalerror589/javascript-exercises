const removeFromArray = function(eingabe, element) {

    for(i = 1; i < arguments.length; i++) {

        while (eingabe.includes(arguments[i])) {
            let index = eingabe.indexOf(arguments[i])
            eingabe.splice(index,1);
        }
    } 


    return eingabe;
};

// Do not edit below this line
module.exports = removeFromArray;
