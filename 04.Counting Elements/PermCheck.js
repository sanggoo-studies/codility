// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var arr = [];

	for(var i=0; i<A.length; i++) {
		arr[A[i]] = true;
	}

	for(i=0; i<A.length; i++) {
		if(typeof arr[i+1] === 'undefined')
			return 0;
	}

	return 1;
}

console.log(solution([4,1,3,2]));
console.log(solution([4,1,3]));

//https://codility.com/demo/results/training8AX9NF-WCE/