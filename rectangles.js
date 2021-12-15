function count(input) {
    function transform(strArr){
    let outputArr = [];
    if (strArr === []){
        return []
    } else for (let i=0;i<strArr.length;i++){
        for (let j=0;j<strArr[i].length;j++){
        if (strArr[i].charAt(j) === '+'){
            outputArr.push([j,i])
        }
        }
    } return outputArr;
    }
    function parseCoordArray(coordArr) {
    let rectangleCount = 0;
    let hash = {};
    for (let k=0;k<coordArr.length;k++){
        hash[coordArr[k]] = k;
    }
    for (let i=0;i<coordArr.length;i++){
    for (let j=0;j<coordArr.length;j++){
    if (coordArr[i][0] <= coordArr[j][0]){continue;}
    if (coordArr[i][1] <= coordArr[i][1]){continue;}
    if (hash.hasOwnProperty(coordArr[i][0],coordArr[j][1]])&&hash.hasOwnProperty([coordArr[j][0],coordArr[i][1]])){
        rectangleeCount++;
    }
    }
    }
    return rectangleCount;
} return parseCoordArray(transform(input))
}