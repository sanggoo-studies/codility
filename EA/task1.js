// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
	// write your code in JavaScript (Node.js 4.0.0)
	N = N.toString();
	var n = [];
	var max = '';
	var i;

	//split each numbers
	for(i = 0; i < N.length; i++) {
		n.push(N[i]);
	}

	//sort reverse
	n.sort(function(a, b) {
		return b-a;
	});

	//combine
	for(i in n) {
		max += n[i];
	}

	return parseInt(max)
}

//https://codility.com/c/feedback/XBAVZM-J4F