// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
	// write your code in JavaScript (Node.js 4.0.0)

	//init data
	var reserved = S.split(' ');
	var seats = new Array(N*10).fill(0);
	var alloc = 0;
	var i, d;

	//check reserved
	if(S.length> 0) {
		for(i = 0; i < reserved.length; i++) {
			d = reserved[i].match(/([0-9]+)([A-K])/);
			seats[(parseInt(d[1])-1)*10 + d[2].charCodeAt(0)-(d[2] < 'I' ? 65 : 66)] = 1;
		}
	}

	//allocate seat
	for(i = 0; i < N*10; i++) {
		if(i % 10 == 0 || i%10 == 3 || i%10 == 4 || i%10 == 7) { //check ADEH seats
			if(check(seats, i) == 0) {
				alloc += 1;
				if(i%10 == 3)
					i+=3;
			}

			if(i%10 != 3 && i%10 != 6)
				i+=2;
		}
	}

	return alloc;
}

//check available
function check(seats, index) {
	return seats[index]+seats[index+1]+seats[index+2];
}