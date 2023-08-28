var array1 = [1, 10,11,12]
var array2 = [2, 3, 4, 5, 6, 7, 8, 9]
console.log(insertArrayInMiddle(array1, array2))
// function add(array1, array2) {

//     var addup=[1,...array2,2]
//     return addup

// }
function insertArrayInMiddle(firstArray, secondArray) {
    const middleIndex = Math.floor(firstArray.length / 2);
    console.log(middleIndex)
    const c=firstArray.slice(0,2)
    console.log(c)
  
    // Use spread syntax to create a new array with the second array inserted in the middle
    const resultArray = [
      ...firstArray.slice(0, middleIndex),
      ...secondArray,
      ...firstArray.slice(middleIndex)
    ];
  
    return resultArray;
  }