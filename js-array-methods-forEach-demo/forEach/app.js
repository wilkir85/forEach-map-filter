// const colors = [ 'teal', 'cyan', 'peach', 'purple' ];

// function yell(val, i) {
// 	const caps = val.toUpperCase();
// 	console.log(`At index ${i}, ${caps}`);
// }

// colors.forEach(yell);

// const prices = [ 30.99, 19.99, 2.5, 99.0 ];
// let total1 = 0;
// prices.forEach(function(price) {
// 	total1 += price;
// });
// console.log(total1);

// let total2 = 0;
// for (let price of prices) {
// 	total2 += price;
// }
// console.log(total2);

// // Our own version of forEach:
// function forEach(arr, callback) {
// 	for (let i = 0; i < arr.length; i++) {
// 		callback(arr[i], i, arr);
// 	}
// }

// forEach(colors, function(color, i) {
// 	console.log(color.toUpperCase(), 'at index of:', i);
// });

// colors.forEach(function(color, i) {
// 	console.log(color.toUpperCase(), 'at index of:', i);
// });







//forEach

//  const colors = ['teal', 'cyan', 'peach', 'purple'];
// colors.forEach(function(val) {
//      console.log(val.toUpperCase()); // show all values,colors, in all caps
// });

//using index, i.
//store in variable
function yell(val,i){
    const caps = val.toUpperCase();
// console. log string template literal
    console.log(`At index ${i}, ${caps}`)// display index
}

colors.forEach(yell); // displays index and value in all caps

// another example
// const prices = [ 30.99, 19.99, 2.5, 99.0 ];
// let total = 0;
// prices.forEach(function(price) {    
// 	total+=price;
// 	console.log(total);
// })

// using for
const prices = [ 30.99, 19.99, 2.5, 99.0 ];
let total = 0;
for (let price of prices) {    
	total+=price;
}
	console.log(total);

	// alternative to for each
	// let total = 0;
	// for(let i = 0; i < prices.length; i++){
    // total+= prices[i];
	// }

	
	
	
	//loop through Array, run callback function on each value in Array,return undefined
	const colors = ['teal', 'cyan', 'peach', 'purple'];

function forEach(arr,callback) {
	for(let i = 0; i <arr.length; i++) {
		callback(arr[i], i); // adding i displays index
	}
}

forEach(colors, function(color, i) { //adding i displays index
	console.log(color.toUpperCase(), 'at index of:', i); // adding , 'at index of:', i displays index
});
