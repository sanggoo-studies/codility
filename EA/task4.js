function solution(A) {
	var N = A.length;

	var result = 0;
	var i, j;
	//search to N - max - 1
	for (i = 0; i < N-1-result; i++) {
		//search from N-1 - reverse
		//worst case ??? T,.Ta
		//11111111111111111111111111111111111111119
		//11111111111111111111111111111111111111111 - worst -0-;;
		for (j = N-1; j >= i+1+result; j--)
			if (A[i] != A[j])
				result = Math.max(result, j - i);
	}
	return result;
}