// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
	// write your code in JavaScript (Node.js 4.0.0)
	var N = S.length;
	var M = P.length;
	var factor;
	var prefix = {'A':[0], 'C':[0], 'G':[0], 'T':[0]};
	var impactFactor = [];

	for(var i=0; i<N;i++) {
		factor = {'A':0, 'C':0, 'G':0, 'T':0};
		factor[S[i]]++;

		prefix['A'].push(prefix['A'][i]+factor['A']);
		prefix['C'].push(prefix['C'][i]+factor['C']);
		prefix['G'].push(prefix['G'][i]+factor['G']);
		prefix['T'].push(prefix['T'][i]+factor['T']);
	}

	factor = {'A':1, 'C':2, 'G':3, 'T':4};
	for(i=0; i<M; i++) {
		var f;
		if(Q[i] == P[i]) {
			f = factor[S[Q[i]]];
		} else if(prefix['A'][Q[i]+1] - prefix['A'][P[i]] > 0) {
			f = 1;
		} else if(prefix['C'][Q[i]+1] - prefix['C'][P[i]] > 0) {
			f = 2;
		} else if(prefix['G'][Q[i]+1] - prefix['G'][P[i]] > 0) {
			f = 3;
		} else {
			f = 4;
		}

		impactFactor.push(f);
	}

	return(impactFactor);
}

console.log(solution('CAGCCTA', [2,5,0], [4,5,6]));
console.log(solution('A', [0], [0]));
console.log(solution('AC', [0, 0, 1], [0, 1, 1]));

//https://codility.com/demo/results/trainingMCQ76E-V2S/
//https://codility.com/demo/results/trainingJ34F7Y-KU6/
//https://codility.com/demo/results/trainingNZT4XC-SUQ/
//https://codility.com/demo/results/training88ZNG9-76F/