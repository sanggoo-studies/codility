// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var N = A.length;

	A.sort(function(a, b) {
		return a-b;
	});

	var m1 = A[N-1]*A[N-2]*A[N-3];
	var m2 = A[0]*A[1]*A[N-1];

	return m1 > m2 ? m1 : m2;
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-3, 1, 2, -2, -5, 6]));
console.log(solution([-3, 1, 2, -5, 6]));
console.log(solution([-3, 1, 2, 6]));
console.log(solution([-5,-6,-4,-7,-10]));
console.log(solution([-5,5,-5,4]));

//https://codility.com/demo/results/trainingCTTECG-XDK/
//https://codility.com/demo/results/trainingTB337Z-NDM/
//https://codility.com/demo/results/trainingNYQ3UP-DTK/