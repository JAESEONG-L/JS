function solution(priorities, location) {
    const priorities_count= [0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    let rear= 0
    let count= 0
    
    for(let i= 0; i<priorities.length; i++) {
        priorities_count[priorities[i]-1]++
    }
    
    do
    {
        let priority= priorities[rear]+1
        
        for(; priority<=9; priority++) {
            if(priorities_count[priority-1]) {
                priorities.push(priorities[rear])
                
                if(rear==location) {
                    location= priorities.length-1
                }
                
                break
            }
        }
        
        if(priority>9) {
            priorities_count[priorities[rear]-1]--
            
            count++
            
            if(rear==location) {
                return count
            }
        }
        
        rear++
    } while(rear<priorities.length);
}
