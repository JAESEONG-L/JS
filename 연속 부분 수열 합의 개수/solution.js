function solution(elements) {
    const check= []
    
    // check[i] should be true, when sum equal to (i+1) shall happen.
    for(let i= 0; i<1000000; i++) {
        check.push(false)
    }
    
    let whole_sum= 0
    
    for(let i= 0; i<elements.length; i++) {
        whole_sum+= elements[i]
    }
    
    check[whole_sum-1]= true
    
    const half_length= Math.floor(elements.length/2)
    
    for(let len= elements.length, i= 0; i<len; i++) {
        let sum= 0
        
        for(let num= 1; num<=half_length; num++) {
            sum+= elements[(i+num-1)%len]
            
            check[sum-1]= true
            
            check[(whole_sum-sum)-1]= true
        }
    }
    
    var answer= 0
    
    for(let i= 0; i<1000*elements.length; i++) {
        if(check[i]) {
            answer++
        }
    }
    
    return answer
}
