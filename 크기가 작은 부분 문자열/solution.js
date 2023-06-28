function solution(t, p) {
    let ptoi= p.charCodeAt(0)-48;
    let answer= 0;
    
    for(let i=1; i<p.length; i++) {
        ptoi= 10*ptoi+p.charCodeAt(i)-48;
    }
    
    
    let tNumber= t.charCodeAt(t.length-p.length)-48;
    
    for(let i=t.length-p.length+1; i<t.length; i++) {
        tNumber= 10*tNumber+t.charCodeAt(i)-48;
    }
    
    if(tNumber<=ptoi) {
        answer++;
    }
    
    for(let i=t.length-p.length-1; i>=0; i--) {
        tNumber= (t.charCodeAt(i)-48)*Math.pow(10, p.length-1)+Math.floor(tNumber/10);
        
        answer += (tNumber<=ptoi)? 1 : 0;
    }
    
    return answer;
}
