export function count(input) {
// the transform function converts the string array into an array of Cartesian coodinates (e.g. [[0,0],[4,2]])
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
    } return [outputArr, outputStr] // Had to return coords as array and string.
    }
// The way I did this, couldn't figure out how to check for 'complete' rectangles (with '-' horizontal sides and '|' vertical sides) 
// without re-inputting the string array into this function.
    function parseCoords(coordArr,coordStr,strArr) {
    let rectangleCount = 0;
    let botLeft = [];
    let topRight = [];
    for (let i=0;i<coordArr.length;i++){
    for (let j=0;j<coordArr.length;j++){
// The basic idea is that if you can find a bottom right corner 'j' (e.g. [4,2]) from a top left corner 'i'(e.g [0,0]), you can check for 
// a rectangle by checking for the presence of other corners (e.g.[4,0] and [0,2]) in the array. I did it here by check the coords in a string,
// was struggling to do check using the coord array.       
    if (coordArr[i][0] >= coordArr[j][0]){continue;} // Checks for possibility of bottom right corner along x-axis.
    if (coordArr[i][1] >= coordArr[j][1]){continue;} // Checks for possibility of bottom right corner along y-axix.
    if (coordStr.includes(`${coordArr[i][0]},${coordArr[j][1]}`)&&coordStr.includes(`${coordArr[j][0]},${coordArr[i][1]}`)){ // Checks for other two corners.
    botLeft = [coordArr[i][0],coordArr[j][1]]; // At this point in the loop, need to define the other corners for purposes of checking all the sides.
    topRight = [coordArr[j][0],coordArr[i][1]];
    const checkAcross = (left,right) => { // Function to check along x-axis, top and bottom. Returns true/false.
      let check = true
        for (let k=left[0]+1;k<right[0];k++){
        if (strArr[left[1]].charAt(k) === '-' ||
           strArr[left[1]].charAt(k) === '+') {continue}
          else {check = false}
       } return check
    }
    if (checkAcross(coordArr[i],topRight) && 
    checkAcross(botLeft,coordArr[j])){
    const checkDown = (top,bottom) => {  //Function checks y-axis, left and right, returns true/false.
      let check = true
        for (let l=top[1]+1;l<bottom[1];l++){
        if (strArr[l].charAt(top[0]) === '|' ||
           strArr[l].charAt(top[0]) === '+') {continue}
        else {check=false}
        } return check
        }
        if (checkDown(coordArr[i],botLeft) &&   // Passing all these tests we can add to rectangle count.
          checkDown(topRight,coordArr[j])) {
            rectangleCount++}}
    }
    }
    }
    return rectangleCount;
} return parseCoords(transform(input)[0],transform(input)[1],input)
}
