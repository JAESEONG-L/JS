function solution(clothes) {
    let kinds= []
    
    for(let i= 0; i<clothes.length; i++) {
        kinds.push(clothes[i][1])
    }
    
    let count= 1
    var answer= 1
    
    kinds.sort()
    
    kinds.push('<>')
    
    for(let i= 1; i<kinds.length; i++) {
        if(kinds[i-1]===kinds[i]) {
            count++
        } else {
            answer*= count+1
            
            count= 1
        }
    }
    
    // Should wear at least 1 clothes.
    answer--
    
    return answer
}
