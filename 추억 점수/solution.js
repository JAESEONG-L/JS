function solution(name, yearning, photo) {
    const points= Array();
    
    for(let i=0; i<photo.length; i++) {
        let pointSum= 0;
        
        for(let j=0; j<photo[i].length; j++) {
            const idx= name.indexOf(photo[i][j]);
            
            if(idx===-1) {
                continue;
            }
            
            pointSum += yearning[idx];
        }
        
        points.push(pointSum);
    }
    
    return points;
}
