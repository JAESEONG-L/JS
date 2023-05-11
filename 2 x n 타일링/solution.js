function solution(n) {
    const size_dp= new Array(n)
    
    size_dp[0]= 1
    
    size_dp[1]= 2
    
    for(let width= 3; width<=n; width++) {
        size_dp[width-1]= size_dp[width-3]+size_dp[width-2]
        
        if(size_dp[width-1]>=1000000007) {
            size_dp[width-1]%= 1000000007
        }
    }
    
    return size_dp[n-1]
}
