function solution(n, words) {
    let end_letter= words[0][words[0].length-1]
    
    for(let i= 1; i<words.length; i++) {
        let fail_check= false
        
        if(words[i][0]!=end_letter) {
            fail_check= true
        } else {
            for(let j= 0; j<i; j++) {
                if(words[i]==words[j]) {
                    fail_check= true
                    
                    break
                }
            }
        }
        
        if(fail_check) {
            return [i%n+1, Math.floor(i/n)+1]
        }
        
        end_letter= words[i][words[i].length-1]
    }
    
    return [0, 0]
}
