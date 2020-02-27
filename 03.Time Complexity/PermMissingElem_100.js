// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	let a = [];
	for (let i = 0; i < A.length +1 ; i++) {
		a[i] = 0;
	}
	for (let j = 0; j < A.length; j++) {
		a[A[j]-1]++;
	}
	return a.indexOf(0) + 1;
}

console.log(solution([1,2,3,4,6]));

// https://app.codility.com/demo/results/training55K3ZW-V5K/ - 100%