// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
	// write your code in JavaScript (Node.js 4.0.0)

	let arr = {};
	let count = 0;

	for(let i=0; i<A.length; i++) {
		if(typeof arr[A[i]] === 'undefined') {
			arr[A[i]] = 1;
			count++;
		}
		if(count === X)
			return i;
	}

	return -1;
}

console.log(solution(5, [1,3,1,4,2,3,5,4]));
console.log(solution(2, [2,2,2,2]));

// https://app.codility.com/demo/results/trainingV99EQQ-G6F/ - 100%