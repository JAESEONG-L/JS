function solution(citations) {
    const citation_count= []
    
    for(let i= 0; i<10001; i++) {
        citation_count.push(0)
    }
    
    for(let i= 0; i<citations.length; i++) {
        citation_count[citations[i]]++
    }
    
    let accum_count= 0
    
    for(let h= 10000; h>=1001; h--) {
        accum_count+= citation_count[h]
    }
    
    for(let h= 1000; h>=0; h--) {
        accum_count+= citation_count[h]
        
        if(h<=accum_count) {
            return h
        }
    }
}
