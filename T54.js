// var r1 = [2, 3, 2]  
// var r2 = [6, 6, 7]
// var r3 =[1, 2, 1]
// // var r4 = [1, 1, 2]
// console.log(Total(r1, r2, r3))
// function Total(r1, r2, r3) {
//     var c = 1
//     var b = 1;
//     var d = 1;
//     var g = 1;
//     for (let i = 0; i < r1.length; i++) {
//         c *= r1[i]
//         b *= r2[i]
//         d *= r3[i]
//         // g *= r4[i]


//     }
//     return c + b + d ;
// }
function totalVolume(...boxes) {
    let total = 0;
  
    for (let i = 0; i < boxes.length; i++) {
      let [length, width, height] = boxes[i];
      console.log(length)
      console.log(boxes[i])
      let volume = length * width * height;
      total += volume;
    }
  
    return total;
  }
  
  // Example usage:
  let box1 = [2, 3, 2];
  let box2 = [6, 6, 7];
  let box3 = [1, 2, 1];
  
  let total = totalVolume(box1, box2, box3);
  console.log(total);