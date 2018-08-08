function solution(A) {
	var N = A.length;
	var intersect = 0;

	for(var i = 0; i < N; i++) {
		for(var j = i+1; j < N; j++) {
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

//https://codility.com/demo/results/training8VU3XK-AE6/
//https://codility.com/demo/results/trainingCU2JAF-R96/
//https://codility.com/demo/results/trainingWNJWKQ-KPE/