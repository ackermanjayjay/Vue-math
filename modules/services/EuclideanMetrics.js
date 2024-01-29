const euclideanDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1
    const deltay = y2 - y1
    
    const distance = Math.sqrt(Math.pow(deltaX,2)+ Math.pow(deltay,2))
    return distance
};

export default euclideanDistance