function solution(A) {
	let N = A.length;
	let intersect = 0;

	for(let i = 0; i < N; i++) {
		for(let j = i+1; j < N; j++) {
			if(A[i] + A[j] >= j-i) {
				intersect++;
				if(intersect > 10000000)
					return -1;
			}
		}
	}

	return intersect;
}

console.log(solution([1,5,2,1,4,0]));
console.log(solution([1,1,1]));

// https://app.codility.com/demo/results/trainingEAA23H-4FY/ - 81%
