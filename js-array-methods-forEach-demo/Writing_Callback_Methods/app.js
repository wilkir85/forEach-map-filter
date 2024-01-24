// function holler() {
// 	console.log('HEY YOU!');
// }

// const whisper = function() {
// 	console.log('pssst I have a secret');
// };

// function add(x, y) {
// 	return x + y;
// }
// function subtract(x, y) {
// 	return x - y;
// }

// function multiply(x, y) {
// 	return x * y;
// }
// function divide(x, y) {
// 	return x / y;
// }
// function power(x, y) {
// 	return x ** y;
// }

//We can store functions in an array (not that common really, but we can!)
//This works because functions are just regular old values in JavaScript!
// const mathFuncs = [ add, subtract, multiply, divide, power ];

//This function expects the 3rd argument to be a function:
// function doMath(a, b, mathFunc) {
// 	return mathFunc(a, b);
// }

// doMath(10, 20, add); //30
// doMath(10, 20, multiply); //200

// doMath(3, 4, function(a, b) {
// 	console.log(a ** b);
// });

// //This function calls every function in an array of functions
// function doAll(a, b, funcs) {
// 	for (let func of funcs) {
// 		console.log(func(a, b));
// 	}
// }

// doAll(3, 3, mathFuncs);
// //6 (from add)
// //0 (from subtract)
// //9 (from multiply)
// //1 (from divide)
// //27 (from power)


// Array Methods

// Function declaration
function holler() {
	console.log('HEY YOU!');
}

// Function Expression, function stored in a variable

const whisper = function () {
	console.log('pssst I have a secret');
}

// passing functions to other functions
function add(x,y) {
	return x + y;
}

function subtract(x,y) {
	return x - y;
}

function multiply(x,y) {
	return x * y;
}

function divide(x,y) {
	return x / y;
}

// add a function

function power(x,y){
	return x ** y;
}
// can put function in an array. Adds above functions in to array called mathFuncs
const mathFuncs = [add, subtract, multiply, divide, power] // adding () will execute the function 

//Callbacks

//setTimeout(func, miliseconds), whisper function happens after 4000 miliseconds in console
setTimeout(whisper, 4000)

//creating own function, doMath function passes a,b to add mathFunc function. a and b same as x and y,names dont matter
function doMath(a,b,mathFunc) {
	return mathFunc(a, b); // in console doMath(7,3,multiply) returns callback of 21
}

//function in a function
doMath(3,4, function(a,b) {
	console.log(a ** b)// (3 to the 4th power)
})

// doAllMath(3,5,mathfuncs)  //calls all funcs to add(3,5), subtract(3,5), etc
//using loop, for let, to loop over function,mathFuncs, doAllMath(3,4,mathFuncs) will show calculation of all functions
function doAllMath(a,b,mathFuncs) {
     for (let func of mathFuncs) {
	 console.log(func(a,b))
	 }
}

// addEventListener('click", function(){}) runs function when click