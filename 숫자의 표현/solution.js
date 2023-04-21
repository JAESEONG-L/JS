function solution(n) {
	var right_value= -0.5+Math.sqrt(1+8*n)/2
	var count= 1
	
	for(var number= 2; number<=right_value; number++) {
		if((n-number*(number+1)/2)%number===0) {
			count++
		}
	}
	
	return count
}
