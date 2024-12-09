const removeFromArray = function(eingabe, element) {

    for(i = 1; i < arguments.length; i++) {


        console.log(eingabe);
        console.log(arguments[i]);
        console.log(eingabe.includes(arguments[i]));

        while (eingabe.includes(arguments[i] == true)) {
            console.log("schleife läuft");
            eingabe.splice(arguments[i]-1,1);
        }
    } 


    return eingabe;
};

console.log(removeFromArray([1,2,3,4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
