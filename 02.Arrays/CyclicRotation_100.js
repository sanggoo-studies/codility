// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
	// write your code in JavaScript (Node.js 4.0.0)
	K = K % A.length;
	let arr = [];

	for(let i = 0; i < A.length; i++) {
		let index = i-K;
		if(index < 0) index = index + A.length;
		arr[i] = A[index];
	}

	return arr;
}

console.log(solution([3,8,9,7,6], 3));
console.log(solution([3,8,9,7,6], 8));

// https://app.codility.com/demo/results/trainingMDMUDC-Q92/ - 100%