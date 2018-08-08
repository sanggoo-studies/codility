// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
	// write your code in JavaScript (Node.js 4.0.0)

	var arr = {};
	var count = 0;

	for(var i=0; i<A.length; i++) {
		if(typeof arr[A[i]] === 'undefined') {
			arr[A[i]] = 1;
			count++;
		}
		if(count == X)
			return i;
	}

	return -1;
}

console.log(solution(5, [1,3,1,4,2,3,5,4]));
console.log(solution(2, [2,2,2,2]));

//https://codility.com/demo/results/training9SMXUB-3S3/
//https://codility.com/demo/results/training3RTXR6-3TW/