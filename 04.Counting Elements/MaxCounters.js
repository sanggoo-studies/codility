// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var max = 0;
	var setMax = 0;
	var arr = [];
	var len = A.length;

	for(var i=0; i<N; i++) {
		arr[i] = 0;
	}

	for(i=0; i<len; i++) {
		if(A[i] > 0 && A[i] <= N) {
			if(++arr[(A[i]-1)] > max) {
				max = arr[(A[i]-1)];
			}
			continue;
		}

		if(A[i] == N+1 && setMax != max) {
			setMax = max;
			for(var j=0; j<N; j++) {
				arr[j] = max;
			}
		}
	}

	return arr;
}

console.log(solution(5, [3,4,4,6,1,4,4]));

//https://codility.com/demo/results/training2KPE9Q-M2J/
//https://codility.com/demo/results/trainingJX9SJ9-WQE/
//https://codility.com/demo/results/trainingC6VSJD-FKB/