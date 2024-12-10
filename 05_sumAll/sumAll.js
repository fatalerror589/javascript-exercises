const sumAll = function(numA, numB) {

    let schritte;
    let ergebniss = 0;
    let startnummer;
    let endnummer;

    if( !Number.isInteger(numA) || !Number.isInteger(numB) || Math.sign(numA) == -1 || Math.sign(numB) == -1 ) {
        return("ERROR");
    }
    
    if(numA > numB) {
        schritte = numA - numB;
        startnummer = numB;
        endnummer = numA;
        ergebniss = numB;
    }
    else {
         schritte = numB - numA;
         startnummer = numA;
         endnummer = numB;
         ergebniss = numA;
    }

    

    for (let i = 1; i <= schritte; i++) {


        ergebniss += startnummer + i;
        

    };

    return(ergebniss);
    
    

};

console.log(sumAll(-10,4));

// Do not edit below this line
module.exports = sumAll;
