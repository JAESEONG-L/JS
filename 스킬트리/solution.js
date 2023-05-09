function solution(skill, skill_trees) {
    const check= new Array(skill.length+1)
    var answer= 0
    
    check[0]= true
    
    for(let i= 0; i<skill_trees.length; i++) {
        let j
        
        for(j= 1; j<=skill.length; j++) {
            check[j]= false
        }
        
        for(j= 0; j<skill_trees[i].length; j++) {
            const index= skill.indexOf(skill_trees[i][j])
            
            if(index!=-1) {
                if(!check[index]) {
                    break
                }
                
                check[index+1]= true
            }
        }
        
        if(j==skill_trees[i].length) {
            answer++
        }
    }
    
    return answer
}
