const convertToCelsius = function(inputC) {



  return Math.round(((inputC-32)*0.555556)*10)/10;

};

const convertToFahrenheit = function(inputF) {


  return Math.round((inputF*1.8+32)*10)/10;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
