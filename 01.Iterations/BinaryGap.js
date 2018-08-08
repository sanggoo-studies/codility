// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
	var isGap = false;
	var count = 0;
	var maxCount = 0;
	var binary = (N >>> 0).toString(2);

	for(var i = 0; i < binary.length; i++) {
		if(binary[i] == '0') {
			count++;
		} else {
			if(isGap && count > maxCount) {
				maxCount = count;
			}
			count = 0;
			isGap = true;
		}
	}
	return maxCount;
}

console.log(solution(1041));
console.log(solution(20));

//https://codility.com/demo/results/trainingST7XYF-KDB/