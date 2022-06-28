const kelvin = 0; //constant variable named kelvin which has the value of 0
console.log("The temperature in kelvin is = " + kelvin);

var celsius;
celsius = kelvin - 273.15; 
console.log("The temperature in celsius is = " + celsius);

var farenheit;
farenheit = celsius *(9/5)+32;
farenheit = Math.floor(farenheit);
console.log("The temperature in farenheit is = " + farenheit);

var Newton;
Newton = celsius *(33/100);
console.log(`The temperature in Newton is = ${Math.floor(Newton)}`);