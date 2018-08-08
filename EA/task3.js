// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
	// write your code in JavaScript (Node.js 4.0.0)

	//AB, BA -> AA
	//CB, BC -> CC
	//AA -> A
	//CC -> C

	// return type1(S);     //use regular expression
	return type2(S);        //array search
}

function type1(S) {
	var old = '';
	do {
		old = S;
		S = rep(S);
	} while(S != old);

	return S
}

function rep(S) {
	S = S.replace(/AB|BA/g, 'AA');
	S = S.replace(/CB|BC/g, 'CC');
	S = S.replace(/AA/g, 'A');
	S = S.replace(/CC/g, 'C');

	return S;
}

function type2(S) {
	S = S.split('');
	var t;
	var change;

	for(var i = 0; i < S.length; i++) {
		do {
			change = false;
			if(i < S.length - 1) {
				t = S[i]+S[i+1];

				switch(t) {
					case 'AB':
					case 'BA':
					case 'AA':
						S[i]='A';
						change = true;
						break;
					case 'CB':
					case 'BC':
					case 'CC':
						S[i]='C';
						change = true;
						break;
				}
				if(change)
					S.splice(i+1, 1);
			}
		} while(change);

	}

	return S.join('');
}