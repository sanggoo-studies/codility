// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	let sum = 0;
	for(let i = 0; i < A.length; i++) {
		sum+=A[i];
	}
	let min;

	let lsum = A[0];
	let rsum = 0;
	let gap = 0;
	for(let i = 1; i<A.length; i++) {
		rsum = sum-lsum;
		gap = Math.abs(lsum-rsum);
		if(typeof min === 'undefined' || min > gap) {
			min = gap;
		}
		lsum+=A[i];
	}

	return min;
}

console.log(solution([3,1,2,4,3]));
console.log(solution([3,1]));
console.log(solution([3,1,2]));
console.log(solution([-10, -30]));

// https://app.codility.com/demo/results/trainingGHH7EF-ZCW/ - 100%