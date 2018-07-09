// function naiveSearch(array, item) {
// 	for (let i=0; i<array.length; i++) {
// 		if (array[i] === item) {
// 			return i;
// 		}
// 	}
// }

function naiveSearch(array, item) {
	let ticks = 0; result=0;
	for (let i = 0; i<array.length; i++) {
		ticks++;
		if(array[i] === item) {
			ticks++;
		}
		result = i;
	}
	return{
		result: result,
		ticks: ticks
	}
}
// naiveSearch([1,2,3], 2) ;
// console.log(naiveSearch([1,2,3], 3) );
function getRunTimeOperations(fn, input) {
	const {array, item} = input;
	const {ticks, result} = fn(array, item);
	console.log(
		`With input of size ${array.length}, ${fn.name}` +
		` clocked ${ticks} ticks to generate result of ${result}.`
		);
}

getRunTimeOperations(naiveSearch, {array: [1,2,3], item: 2});
getRunTimeOperations(
  naiveSearch,
  {array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], item: 9});
getRunTimeOperations(
  naiveSearch,
  {item: 99, array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]});