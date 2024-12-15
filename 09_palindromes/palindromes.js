const palindromes = function (input) {

    let sauber = input.replace(/\W/g, "")

    let gedreht = sauber.split("").reverse().join("");

    if(gedreht.toLowerCase() === sauber.toLowerCase()) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
