function solution(A, B) {
	var N = A.length;
	var alive = 0;

	for(var i = 0; i < N; i++) {
		if(B[i] == 0 || i == N-1) {
			alive++;
		} else if(i < N-1) {
			if(B[i+1] == 0) {
				A[i+1] = A[i];
				B[i+1] = B[i];
			} else {
			}
		}
	}

	return alive;
}

console.log(solution([4,3,2,1,5], [0,1,0,0,0]));
console.log(solution([4,3,2,1,5], [0,1,1,0,0]));

//https://codility.com/demo/results/trainingBRPWCN-ZX8/