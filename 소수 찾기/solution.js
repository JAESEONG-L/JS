let answer= 0
let primes= [10]

function isPrime(number) {
    const sqrtNum= Math.floor(Math.sqrt(number))
    
    for(let num= 2; num<=sqrtNum; num++) {
        if(number%num==0) {
            return false
        }
    }
    
    return true
}

function dive(numbers, check, num) {
    for(let i= 0; i<numbers.length; i++) {
        if(check%Math.pow(2, i+1)<Math.pow(2, i)) {
            const next_num= num*10+numbers[i].charCodeAt(0)-48
            
            if(isPrime(next_num)) {
                primes.push(next_num)
            }
            
            dive(numbers, check+Math.pow(2, i), next_num)
        }
    }
}

function solution(numbers) {
    numbers= numbers.split('')
    
    numbers.sort()
    
    
    let non_zero_idx= 0
    
    while(non_zero_idx<numbers.length && numbers[non_zero_idx]=='0')
    {
        non_zero_idx++
    }
    
    
    if(non_zero_idx<=numbers.length-1 && (numbers[non_zero_idx]=='2' || numbers[non_zero_idx]=='3' || numbers[non_zero_idx]=='5' || numbers[non_zero_idx]=='7')) {
        answer++
    }
    
    for(let i= non_zero_idx+1; i<numbers.length; i++) {
        if(numbers[i-1]!=numbers[i] && (numbers[i]=='2' || numbers[i]=='3' || numbers[i]=='5' || numbers[i]=='7')) {
            answer++
        }
    }
    
    
    for(let i= non_zero_idx; i<numbers.length; i++) {
        dive(numbers, Math.pow(2, i), numbers[i].charCodeAt(0)-48)
    }
    
    primes.sort()   // Does not carry out Number sorting.
    
    for(let i= 1; i<primes.length; i++) {
        if(primes[i-1]!=primes[i]) {
            answer++
        }
    }
    
    return answer
}
