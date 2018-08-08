// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var a = [];
	for (var i = 0; i < A.length +1 ; i++) {
		a[i] = 0;
	}
	for (var j = 0; j < A.length; j++) {
		a[A[j]-1]++;
	}
	return a.indexOf(0) + 1;
}

console.log(solution([1,2,3,4,6]));

//https://codility.com/demo/results/trainingZMAS6H-4RM/
//https://codility.com/demo/results/trainingGNEYT8-8WD/