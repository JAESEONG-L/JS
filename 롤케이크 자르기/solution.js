function solution(topping) {
    if(topping.length<=1) {
        return 0
    }
    
    const right_counts= []  // Try cutting from left to right.
    
    for(let i= 0; i<10000; i++) {
        right_counts.push(0)
    }
    
    for(let i= 0; i<topping.length; i++) {
        right_counts[topping[i]-1]++
    }
    
    const left_checks= new Array(10000)
    
    let lcount= 0, rcount= 0
    
    for(let kind= 1; kind<=10000; kind++) {
        if(right_counts[kind-1]) {
            rcount++
        }
    }
    
    let size= 1     // Left piece's size.
    let count= 0    // Count answer.
    
    do
    {
        if(left_checks[topping[size-1]-1]==undefined) {
            left_checks[topping[size-1]-1]= true
            
            lcount++
        }
        
        right_counts[topping[size-1]-1]--
        
        if(right_counts[topping[size-1]-1]==0) {
            rcount--
        }
        
        if(lcount==rcount) {
            count++
        }
        
        size++
    } while(size<topping.length);
    
    return count
}
