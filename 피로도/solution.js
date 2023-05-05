let answer= 0
let count= 0

function dive(left, explore_state, dungeons) {
    if(count>answer) {
        answer= count
    }
    
    for(let num= 1; num<=dungeons.length; num++) {
        if(explore_state%Math.pow(2, num)<2**(num-1) && dungeons[num-1][0]<=left) {
            count++
            
            dive(left-dungeons[num-1][1], explore_state+2**(num-1), dungeons)
            
            count--
        }
    }
}

function solution(k, dungeons) {
    dive(k, 0, dungeons)
    
    return answer
}
