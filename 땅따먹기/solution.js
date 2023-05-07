function solution(land) {
    const step_dp= [[], []]
    var answer= 0
    
    for(let i= 0; i<4; i++) {
        step_dp[0].push(land[0][i])
        
        step_dp[1].push(0)
    }
    
    for(let i= 1; i<land.length; i++) {
        for(let j= 0; j<4; j++) {
            let max_score= step_dp[(i-1)%2][(j+1)%4]+land[i][j]
            
            if(max_score<step_dp[(i-1)%2][(j+2)%4]+land[i][j]) {
                max_score= step_dp[(i-1)%2][(j+2)%4]+land[i][j]
            }
            
            if(max_score<step_dp[(i-1)%2][(j+3)%4]+land[i][j]) {
                max_score= step_dp[(i-1)%2][(j+3)%4]+land[i][j]
            }
            
            step_dp[i%2][j]= max_score
        }
    }
    
    for(let i= 0; i<4; i++) {
        if(answer<step_dp[(land.length-1)%2][i]) {
            answer= step_dp[(land.length-1)%2][i]
        }
    }
    
    return answer
}
