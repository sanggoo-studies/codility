// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
	// write your code in JavaScript (Node.js 4.0.0)
	let big = Math.floor(B/K);
	let small = Math.ceil(A/K);

	return big - small + 1;
}

console.log(solution(7, 11, 2));

// https://app.codility.com/demo/results/training3T63V4-SX9/ - 100%