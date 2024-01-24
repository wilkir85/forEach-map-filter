// const words = [
// 	'immunoelectrophoretically',
// 	'rotavator',
// 	'tsktsk',
// 	'psychophysicotherapeutics',
// 	'squirrelled',
// 	'crypt',
// 	'uncopyrightable',
// 	'cysts',
// 	'pseudopseudohypoparathyroidism',
// 	'unimaginatively'
// ];

// const containsVowel = function(word) {
// 	for (let char of word) {
// 		if (isVowel(char)) return true;
// 	}
// 	return false;
// };

// const isVowel = function(char) {
// 	return 'aeiou'.indexOf(char) !== -1;
// };

// const longWords = words.filter(function(word) {
// 	return word.length >= 20;
// });

// const cOrUWords = words.filter(function(w) {
// 	return w[0] === 'u' || w[0] === 'c';
// });

// const containVowels = words.filter(containsVowel);

// const noVowels = words.filter(function(word) {
// 	return !containsVowel(word);
// });

// function extractCompletedTodos() {
// 	const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
// 	return Array.from(allCheckboxes)
// 		.filter(function(box) {
// 			return box.checked;
// 		})
// 		.map(function(checkbox) {
// 			return checkbox.parentElement.innerText;
// 		});
// }

// function myFilter(arr, callback) {
// 	const filteredArray = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (callback(arr[i], i, arr)) {
// 			filteredArray.push(arr[i]);
// 		}
// 	}
// 	return filteredArray;
// }

// const shorties = myFilter(words, function(word) {
// 	return word.length <= 10;
// });

// const everyOtherWord = myFilter(words, function(word, i) {
// 	return i % 2 === 0;
// });





const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const longWords = words.filter(function(word){ //word is value, 
	return word.length >= 20;
})

//Alternate
// word.filter(function(word) {
// 	if(word.length >= 20) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// })

const cOrUWordsWord = words.filter(function(w) {
    return w[0] === 'u' || w[0] === 'c';  // returns words beginning w/ u or c. || is or
})

// call back words with no vowels, y doesn't count

const containsVowel = function(word) { // function calls isVowel, if it returns true we know it contains a vowel. needs to move above const longwords
	for(let char of word) {
		if(isVowel(char)) return true;
	}
	return false
}
// function accepts character and will return true or false if its a vowel
const isVowel = function(char) {  //needs to move above const longwords
 return 'aeiou'.indexOf(char) !== -1; // if character is not in string it will return -1, !== -1 means not equal to -1, makes all vowels return true
}
const containVowels = words.filter(containsVowel); 
const noVowels = words.filter(function(word) {
	return !containsVowel(word);
});

function myfilter(arr, callback) {
	const filteredArray = [];
	for(let i = 0; i < arr.length; i++)
	if(callback(arr[i], i, arr)) {
		filteredArray.push(arr[i])
	}
	return filteredArray;
}