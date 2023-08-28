var arr=[[1, 2], [3, 4]]
console.log(flatten(arr))

function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2=arr2.concat(arr[i]);
    }
    return arr2;
  }