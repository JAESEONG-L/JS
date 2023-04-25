function solution(n) {
    let answer= [1, 1]
    
    for(let num= 2; num<=n; num++) {
        answer.push((answer[num-1]+answer[num-2])%1234567)
    }
    
    return answer[n]
}
