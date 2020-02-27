// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
	// write your code in JavaScript (Node.js 4.0.0)
	let max = 0;
	let setMax = 0;
	let arr = [];
	let len = A.length;

	for(let i=0; i<N; i++) {
		arr[i] = 0;
	}

	for(let i=0; i<len; i++) {
		if(A[i] > 0 && A[i] <= N) {
			if(++arr[(A[i]-1)] > max) {
				max = arr[(A[i]-1)];
			}
			continue;
		}

		if(A[i] === N+1 && setMax !== max) {
			setMax = max;
			for(let j=0; j<N; j++) {
				arr[j] = max;
			}
		}
	}

	return arr;
}

console.log(solution(5, [3,4,4,6,1,4,4]));

// https://app.codility.com/demo/results/training4FB3RK-ES8/ - 100%