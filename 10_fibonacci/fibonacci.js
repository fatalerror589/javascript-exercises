const fibonacci = function(n) {
    
    let zahl = parseInt(n);

    if (zahl === 1 || zahl === 0) {
        return zahl;
    }
    else if (Math.sign(zahl) === -1) {
        return "OOPS";
    }

    return fibonacci(zahl-1) + fibonacci(zahl-2);

};


console.log(fibonacci(5));
// Do not edit below this line
module.exports = fibonacci;
