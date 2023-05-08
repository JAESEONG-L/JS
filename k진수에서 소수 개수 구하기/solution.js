function countIfPrime(number) {
    let sqrtNum= Math.floor(Math.sqrt(number))
    
    for(let i= 2; i<=sqrtNum; i++) {
        if(number%i===0) {
            return 0
        }
    }
    
    return (number==1)? 0 : 1
}

function solution(n, k) {
    const digits= new Array(13) // 3**12 = 531441
    var answer= 0
    
    let temp= n
    let count= 0
    
    do
    {
        digits[count++]= temp%k
        
        temp= Math.floor(temp/k)
    } while(temp);
    
    for(let i= count-1; i>=0; i--) {
        if(!digits[i]) {
            if(temp) {
                answer+= countIfPrime(temp)
                
                temp= 0
            }
        } else {
            temp= temp*10+digits[i]
        }
    }
    
    if(temp) {
        answer+= countIfPrime(temp)
    }
    
    return answer
}
