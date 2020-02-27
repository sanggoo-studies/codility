// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	let arr = [];

	for(let i = 0; i < A.length; i++) {
		if(A[i] > 0) {
			arr[A[i]] = true;
		}
	}

	if(arr.length < 1) {
		return 1;
	}

	for(let i = 1; i<arr.length; i++) {
		if(typeof arr[i] === 'undefined') {
			return i;
		}
	}

	return arr.length;
}

console.log(solution([1,3,6,4,1,2]));
console.log(solution([7,3,6,4,5,2,1]));
console.log(solution([0]));
console.log(solution([-1, -4]));

// https://app.codility.com/demo/results/trainingR7XC5T-2WW/ - 100%