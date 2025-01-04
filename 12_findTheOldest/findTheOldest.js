const findTheOldest = function(person) {


const withAge = person.toSorted((a, b) => (getAge(a) - getAge(b)));


console.log(withAge);
return withAge[withAge.length - 1];
};

function getAge(person){

    person.yearOfDeath ??= new Date().getFullYear();
    console.log(person.yearOfDeath - person.yearOfBirth);
    return person.yearOfDeath - person.yearOfBirth;

}

// Do not edit below this line
module.exports = findTheOldest;



//28 carly
//49 ray
//29 jane