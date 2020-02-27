// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	let min;
	let minIndex;
	let sum;
	let len = A.length;
	let count;
	let avg;

	for(let i = 1; i < len; i++) {
		sum = A[i];
		count = 1;
		for(let j=i-1; j >= 0 && i-j < 3; j--) {
			sum += A[j];
			count++;
			avg = sum/count;
			if(typeof min === 'undefined' || min > avg) {
				minIndex = j;
				min = avg;
			}
		}
	}

	return minIndex;
}

console.log(solution([-10, -10, -5, -10, -20]));
console.log(solution([-10,-1,-1,-1,-100]));

// https://app.codility.com/demo/results/trainingS78S8U-PTM/ - 100%
