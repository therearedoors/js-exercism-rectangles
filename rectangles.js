export function count(input) {
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
    function parseCoords(coordArr,coordStr,strArr) {
    let rectangleCount = 0;
    let botLeft = [];
    let topRight = [];
    for (let i=0;i<coordArr.length;i++){
    for (let j=0;j<coordArr.length;j++){
    if (coordArr[i][0] >= coordArr[j][0]){continue;}
    if (coordArr[i][1] >= coordArr[j][1]){continue;}
    if (coordStr.includes(`${coordArr[i][0]},${coordArr[j][1]}`)&&coordStr.includes(`${coordArr[j][0]},${coordArr[i][1]}`)){
    botLeft = [coordArr[i][0],coordArr[j][1]];
    topRight = [coordArr[j][0],coordArr[i][1]];
    const checkAcross = (left,right) => {
      let check = true
      console.log(left);
        for (let k=left[0]+1;k<right[0];k++){
        if (strArr[left[1]].charAt(k) === '-' ||
           strArr[left[1]].charAt(k) === '+') {continue}
          else {check = false}
       } return check
    }
    if (checkAcross(coordArr[i],topRight) &&
    checkAcross(botLeft,coordArr[j])){
    const checkDown = (top,bottom) => {
      let check = true
        for (let l=top[1]+1;l<bottom[1];l++){
        if (strArr[l].charAt(top[0]) === '|' ||
           strArr[l].charAt(top[0]) === '+') {continue}
        else {check=false}
        } return check
        }
        if (checkDown(coordArr[i],botLeft) &&
          checkDown(topRight,coordArr[j])) {
            rectangleCount++}}
    }
    }
    }
    return rectangleCount;
} return parseCoords(transform(input)[0],transform(input)[1],input)
}
