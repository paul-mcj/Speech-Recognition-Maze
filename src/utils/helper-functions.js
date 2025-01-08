// will find the index of the largest number of a given array
export function findIndexOfLargestNumber(arr) {
	if (arr.length === 0) {
		return -1; // Return -1 for invalid input or an empty array.
	}

	let largestIndex = 0; // Initialize the index of the largest number as the first element (ie. background noise by default for our scores array)

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[largestIndex]) {
			largestIndex = i; // Update the index of the largest number if a larger number (score) is found.
		}
	}

	return largestIndex;
}

// creates a deep clone of original array so as to not manipulate the contents of the original array
export function deepCloneArray(array) {
	return array.map((subArray) => [...subArray]);
}

// given a unique target value, it will find the position of it in a 2 dimensional array
export function findValuePosition(matrix, target) {
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (matrix[row][col] === target) {
				return [row, col]; // Return the row and column indices of the target value
			}
		}
	}
	// If the target value is not found, return [-1, -1] to indicate it was not found
	return [-1, -1];
}

// will find the coordinate of a given value in a 2 dimensional array
export function getValueAtCoordinate(matrix, coordinate) {
	const [x, y] = coordinate;

	if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length) {
		return matrix[x][y];
	} else {
		return null; // Return null for out-of-bounds coordinates
	}
}

// reload ths current webpage
export function refreshPage() {
	window.location.reload();
}

// determines if the final index in every sub-array of a 2-dimensional array has a value of 1
export function allOnesInLastIndex(arr) {
	for (let subarr of arr) {
		if (subarr[subarr.length - 1] !== 1) {
			return false;
		}
	}
	return true;
}
