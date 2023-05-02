function solution(s) {
    const s_array= []
    const index_location= []
    var answer= []
    
    for(let i= 0; i<=500; i++) {
        index_location.push(0)
    }
    
    let i= 1
    
    do
    {
        i++
        
        s_array.push([])
        
        do
        {
            let temp= 0
            
            while(48<=s.charCodeAt(i) && s.charCodeAt(i)<=57)
            {
                temp= temp*10+(s.charCodeAt(i++)-48)
            }
            
            s_array[s_array.length-1].push(temp)
        } while(s[i++]==',');
        
        index_location[s_array[s_array.length-1].length]= s_array.length-1
    } while(s[i++]==',');
    
    const appearance_check= []
    
    for(let i= 0; i<100000; i++) {
        appearance_check.push(false)
    }
    
    for(let num= 1; num<=s_array.length; num++) {
        const len= s_array[index_location[num]].length
        
        for(let j= 0; j<len; j++) {
            if(!appearance_check[s_array[index_location[num]][j]-1]) {
                answer.push(s_array[index_location[num]][j])
                
                appearance_check[s_array[index_location[num]][j]-1]= true
                
                break
            }
        }
    }
    
    return answer
}
