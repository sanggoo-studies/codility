// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	let N = A.length;

	A.sort(function(a, b) {
		return a - b;
	});

	let m1 = A[N-1]*A[N-2]*A[N-3];
	let m2 = A[0]*A[1]*A[N-1];

	return m1 > m2 ? m1 : m2;
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-3, 1, 2, -2, -5, 6]));
console.log(solution([-3, 1, 2, -5, 6]));
console.log(solution([-3, 1, 2, 6]));
console.log(solution([-5,-6,-4,-7,-10]));
console.log(solution([-5,5,-5,4]));

// https://app.codility.com/demo/results/training9346H5-DNZ/ - 100%
