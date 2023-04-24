function compareNumbers(a, b) {
    return a-b
}

function lcm(a, b) {
    for(let num= 1n; num<=b; num++) {
        if((a*num)%b==0) {
            return a*num
        }
    }
}

function solution(arr) {
    arr.sort (compareNumbers)
    
    let answer= BigInt(1)
    let i= 0
    
    while(i<arr.length && arr[i]===1)
    {
        i++
    }
    
    for(; i<arr.length; i++) {
        answer= lcm (answer, BigInt(arr[i]))
    }
    
    return answer
}
