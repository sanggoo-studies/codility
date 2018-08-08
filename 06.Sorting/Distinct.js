// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var count = 0;
	var N = A.length;
	var last;

	A.sort();

	for(var i=0; i<N; i++) {
		if(A[i] != last) {
			count++;
			last = A[i];
		}
	}

	return count;
}

console.log(solution([2,1,1,2,3,1]));

//https://codility.com/demo/results/trainingAF266U-EZA/
//https://codility.com/demo/results/trainingYTPQTB-ZDP/