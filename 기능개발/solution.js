function solution(progresses, speeds) {
    var answer= []
    
    let i= 0
    
    do
    {
        for(let j= i; j<progresses.length; j++) {
            progresses[j]+= speeds[j]
        }
        
        let count= 0
        
        while(i<progresses.length && progresses[i]>=100)
        {
            count++
            
            i++
        }
        
        if(count) {
            answer.push(count)
        }
    } while(i<progresses.length);
    
    return answer
}
