function compareNumbers(a, b) {
    return a-b
}

function solution(k, tangerine) {
    tangerine.sort(compareNumbers)
    tangerine.push(10000001)
    
    let count= 1
    const numbers_check= []
    
    for(let i= 0; i<100000; i++) {
        numbers_check.push(0)
    }
    
    for(let i= 1; i<tangerine.length; i++) {
        if(tangerine[i-1]!=tangerine[i]) {
            numbers_check[count-1]++
            
            count= 1
        } else {
            count++
        }
    }
    
    let sum= 0
    let i= 99999, kinds_count= 0
    
    while(sum<k)
    {
        while(numbers_check[i]==0)
        {
            i--
        }
        
        sum+= i+1
        kinds_count++
        
        numbers_check[i]--
    }
    
    return kinds_count
}
