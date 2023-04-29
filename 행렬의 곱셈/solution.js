function dot_product(v1, v2) {
    let sum= v1[0]*v2[0]
    
    for(let i= 1; i<v1.length; i++) {
        sum+= v1[i]*v2[i]
    }
    
    return sum
}

function solution(arr1, arr2) {
    const width= arr2[0].length
    var answer= []
    
    for(let i= 0; i<arr1.length; i++) {        
        answer.push([])
        
        for(let j= 0; j<width; j++) {
            let column= []
            
            for(let num= 1; num<=arr2.length; num++) {
                column.push(arr2[num-1][j])
            }
            
            answer[i].push(dot_product(arr1[i], column))
        }
    }
    
    return answer
}
