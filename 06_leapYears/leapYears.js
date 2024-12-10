const leapYears = function(jahr) {

    if(jahr % 4 == 0) {

        if(jahr % 100 == 0 && jahr % 400 != 0) {
            return false;
        }

        else return true;

    }

    else return false;

};

// Do not edit below this line
module.exports = leapYears;
