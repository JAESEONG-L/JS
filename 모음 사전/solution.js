function solution(word) {
    const vowel_order= new Array(26)
    
    vowel_order[0]= 1, vowel_order[4]= 2, vowel_order[8]= 3, vowel_order[14]= 4, vowel_order[20]= 5
    
    var answer= 0
    
    for(let num= 1; num<=word.length; num++) {
        answer+= (vowel_order[word.charCodeAt(num-1)-65]-1)*(Math.pow(5, 5-num+1)-1)/4
        
        answer++
    }
    
    return answer
}
