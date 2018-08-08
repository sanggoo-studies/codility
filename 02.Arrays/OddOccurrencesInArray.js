// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	var times = {};

	for(var i = 0; i < A.length; i++) {
		if(typeof times[A[i]] === 'undefined') {
			times[A[i]] = 1;
		} else {
			times[A[i]]++;
		}
	}

	for(var x in times) {
		if(times[x] % 2 != 0)
			return parseInt(x);
	}
}

console.log(solution([9,3,9,3,9,7,9]));

//https://codility.com/demo/results/trainingEXH9MY-NDN/