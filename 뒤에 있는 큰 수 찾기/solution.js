function compareNumbers(a, b) {
	return a-b
}

function solution(numbers) {
	var answer= []
	var temp= [1000000], temp_i= 0
	var info= []
	
	for(var i= 0; i<numbers.length; i++) {
		while(temp[temp_i]%10000000<numbers[i])
		{
			info.push (temp[temp_i]-temp[temp_i]%10000000+numbers[i])
			
			temp.pop ()
			temp_i--
		}
		
		temp.push (i*10000000+numbers[i])
		temp_i++
		
		var j= temp_i-1
		
		while(temp[j]%10000000<temp[j+1]%10000000)
		{
			var temp2= temp[j]; temp[j]= temp[j+1]; temp[j+1]= temp2
			
			j--
		}
	}
	
	while(temp_i)
	{
		info.push (temp[temp_i]-temp[temp_i]%10000000)
		
		temp_i--
	}
	
	info.sort (compareNumbers)
	
	for(var i= 0; i<info.length; i++) {
		if(info[i]%10000000==0) {
			answer.push (-1)
		} else {
			answer.push (info[i]%10000000)
		}
	}
	
	return answer
}
