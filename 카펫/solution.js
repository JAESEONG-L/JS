function solution(brown, yellow) {
    for(let brown_width= (brown-2)/2; brown_width>=3; brown_width--) {
        if((brown_width-2)*(brown/2-brown_width)===yellow) {
            return [brown_width, brown/2-brown_width+2]
        }
    }
    
    return [0, 0]
}
