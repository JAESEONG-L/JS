function min(a, b) {
    if(a<b) {
        return a
    }
    
    return b
}

function solution(x, y, n) {
    const num_dp= new Array(y-x+1)
    
    num_dp[0]= 0
    
    for(let num= x+1; num<x+n; num++) {
        num_dp[num-x]= 1000000
    }
    
    for(let num= x+n; num<x*2; num++) {
        num_dp[num-x]= 1000000
    }
    
    for(let num= min(x+n, x*2); num<=y; num++) {
        let min_count= 1000000
        
        if(x<=num-n && num_dp[(num-n)-x]+1<min_count) {
            min_count= num_dp[(num-n)-x]+1
        }
        
        if(num%2==0 && x<=num/2 && num_dp[num/2-x]+1<min_count) {
            min_count= num_dp[num/2-x]+1
        }
        
        if(num%3==0 && x<=num/3 && num_dp[num/3-x]+1<min_count) {
            min_count= num_dp[num/3-x]+1
        }
        
        num_dp[num-x]= min_count
    }
    
    if(num_dp[y-x]==1000000) {
        return -1
    } else {
        return num_dp[y-x]
    }
}
