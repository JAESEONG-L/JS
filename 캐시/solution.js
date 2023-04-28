function solution(cacheSize, cities) {
    const cache= []
    const usedAt= []
    let hit_count= 0, miss_count= 0
    
    for(let i= 0; i<cacheSize; i++) {
        cache.push('')
        
        usedAt.push(-1)
    }
    
    for(let i= 0; i<cities.length; i++) {
        cities[i]= cities[i].toUpperCase()
        
        let j= 0
        
        for(; j<cacheSize; j++) {
            if(cities[i]==cache[j]) {
                hit_count++
                
                usedAt[j]= i
                
                break
            }
        }
        
        if(j==cacheSize) {
            miss_count++
            
            j= 0
            
            let pos
            
            for(let min= 499996; j<cacheSize; j++) {
                if(usedAt[j]<min) {
                    pos= j
                    
                    min= usedAt[j]
                }
            }
            
            cache[pos]= cities[i]
            
            usedAt[pos]= i
        }
    }
    
    return 1*hit_count+5*miss_count
}
