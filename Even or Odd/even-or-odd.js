// function(isEven) {
// 	if(value%2===0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }


function isEven(value) {
	let ticks = 0, result=false;

	// const even = value%2 === 0;
	// ticks++;
	if(value%2===0){
		result=true;
	}
	ticks++;

	return{
		result: result,
		ticks: ticks
	};
}

function checkEven(fn, input) {
	const {ticks, result} = fn(input);
	console.log(
		`With input of size ${input.length}, ${fn.name}` + 
		` clocked ${ticks} ticks to generate result of ${result}.`
		);
}

checkEven(isEven, [24]);
checkEven(isEven, [15]);
checkEven(isEven, [10]);