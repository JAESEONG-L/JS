function solution(numbers) {
    const answer= []
    
    for(const number of numbers) {
        if(number%2===0) {
            answer.push(number+1)
        } else {
            let pos= 0
            let temp= number
            
            do
            {
                pos++
                
                temp= Math.floor(temp/2)
            } while(temp%2);
            
            answer.push(number+Math.pow(2, pos-1))
        }
    }
    
    return answer
}
