function count(input) {
    function transform(strArr){
    let outputArr = [];
    let outputStr = ``;
    if (strArr === []){
        return ([],``)
    } else for (let i=0;i<strArr.length;i++){
        for (let j=0;j<strArr[i].length;j++){
        if (strArr[i].charAt(j) === '+'){
            outputStr += `${j},${i}`;
            outputArr.push([j,i]); 
        }
        }
    } return [outputArr, outputStr]
    }
    function parseCoords(coordArr,coordStr) {
    let rectangleCount = 0;
    for (let i=0;i<coordArr.length;i++){
    for (let j=0;j<coordArr.length;j++){
    if (coordArr[i][0] <= coordArr[j][0]){continue;}
    if (coordArr[i][1] <= coordArr[j][1]){continue;}
    if (coordStr.includes(`${coordArr[i][0]},${coordArr[j][1]}`)&&coordStr.includes(`${coordArr[j][0]},${coordArr[i][1]}`)){
        rectangleCount++;
    }
    }
    }
    return rectangleCount;
} return parseCoords(transform(input)[0],transform(input)[1])
}