function min(a, b) {
    if(a<b) {
        return a
    }
    
    return b
}

function digit(number, digit_num, n) {
    const temp= Math.floor(number/Math.pow(n, digit_num-1))%n
    
    if(temp<10) {
        return temp
    }
    
    switch(temp)
    {
        case 10:
            return 'A'
        case 11:
            return 'B'
        case 12:
            return 'C'
        case 13:
            return 'D'
        case 14:
            return 'E'
        case 15:
            return 'F'
        default:
            return
    }
}

function solution(n, t, m, p) {
    var answer= ''
    
    let current_num= 0
    let cipher= 0
    
    do
    {
        cipher++
        
        do
        {
            const temp= min(Math.floor((p-1)/cipher), Math.pow(n, cipher)-current_num)
            
            p-= temp*cipher
            
            current_num+= temp
            
            if(current_num<Math.pow(n, cipher)) {
                answer+= digit(current_num, cipher-p+1, n)
                
                p+= m
            }
        } while(answer.length<t && current_num<Math.pow(n, cipher));
    } while(answer.length<t);
    
    return answer
}
