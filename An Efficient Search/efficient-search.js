function efficientSearch(array, item) {
	let midIndex = 0;
	let maxIndex = array.length-1;
	let currentIndex;
	let currentElement;

	while(minIndex <= maxIndex ) {
		currentIndex = Math.floor((minIndex + maxIndex) / 2);
		currentElement = array[currentIndex];

		if (currentElement < item) {
			minIndex = currentIndex + 1;
		}

		else if (currentIndex > item) {
			maxIndex = currentIndex -1;
		}

		else {
			return currentIndex;
		}
	}
	return -1;
}