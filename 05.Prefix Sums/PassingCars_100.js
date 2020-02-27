// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	let length = A.length;
	let count = 0;
	let next = 0;

	for(let i = 0; i<length; i++) {
		if(A[i] === 0) {
			next++;
		} else {
			count += next;
		}

		if(count > 1000000000) {
			count = -1;
			break;
		}
	}

	return count;
}

console.log(solution([0,1,0,1,1]));

// https://app.codility.com/demo/results/trainingGP9TZH-UHV/ - 100%
