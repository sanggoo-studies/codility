// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	let count = 0;
	let N = A.length;
	let last;

	A.sort();

	for(let i=0; i<N; i++) {
		if(A[i] !== last) {
			count++;
			last = A[i];
		}
	}

	return count;
}

console.log(solution([2,1,1,2,3,1]));

// https://app.codility.com/demo/results/trainingVWY2RZ-5QT/ - 100%
