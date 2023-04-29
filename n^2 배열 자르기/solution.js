function solution(n, left, right) {
    var answer= []
    
    for(let i= left; i<=right; i++) {
        const row_number= Math.floor(i/n)+1
        const col_number= i%n+1
        
        answer.push((row_number<col_number)? col_number : row_number)
    }
    
    return answer
}
