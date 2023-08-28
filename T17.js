const arr1 = [1, 2, 3,4];
const arr2 = [0,6];

console.log(canBeNested(arr1, arr2)); // Output: true

// const arr3 = [1, 2, 3];
// const arr4 = [3, 2, 1, 4, 5];

// console.log(canBeNested(arr3, arr4)); // Output: false

function canBeNested(arr1, arr2) {
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        i++; // Move to the next element in arr1
      }
      j++; // Always move to the next element in arr2
    }
  
    // If we have reached the end of arr1, it means all elements were found in arr2
    return i === arr1.length;
  }
  