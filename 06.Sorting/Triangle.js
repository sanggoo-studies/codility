// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var N = A.length;

	A.sort(function(a, b) {
		return a-b;
	});

	for(var i = 2; i < N; i++) {
		if(A[i-1]+A[i-2] > A[i])
			return 1;
	}

	return 0;
}

console.log(solution([10,2,5,1,8,20]));
console.log(solution([10,50,5,1]));

//https://codility.com/demo/results/trainingNU7837-GXW/