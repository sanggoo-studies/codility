// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
	// write your code in JavaScript (Node.js 4.0.0)
	var big = Math.floor(B/K);
	var small = Math.ceil(A/K);

	return big-small+1;
}

console.log(solution(7, 11, 2));

//https://codility.com/demo/results/training44QN7Q-2FM/