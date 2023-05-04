function solution(numbers, target) {
    const target_dp= [[], []]   // -499 ~ 1000 range x2
    
    for(let i= 0; i<1500; i++) {
        target_dp[0].push(0)
        
        target_dp[1].push(0)
    }
    
    target_dp[0][499+numbers[0]]= 1
    
    target_dp[0][499-numbers[0]]= 1
    
    for(let i= 1; i<numbers.length; i++) {
        for(let num= numbers[i]; num<=1499-numbers[i]; num++) {
            target_dp[i%2][num]= target_dp[(i-1)%2][num-numbers[i]]+target_dp[(i-1)%2][num+numbers[i]]
        }
    }
    
    return target_dp[(numbers.length-1)%2][target+499]
}
