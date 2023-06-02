
// var a = [2, 3, 4, 3, 5, 8, 3, 4, 3];

// for (var i = 0; i < a.length; i++) {
//   if (a[i] === 3) {
//     for (var j = i; j < a.length - 1; j++) {
//       var temp = a[j];
//       a[j] = a[j + 1];
//       a[j + 1] = temp;
//     }
//   }
// }

// console.log(a);
// var a = [2, 3, 4, 3, 5, 8, 3, 4, 7];

// var left = 0;
// var right = a.length - 1;

// while (left < right) {
//   if (a[left] === 3 && a[right] !== 3) {
//     var temp = a[left];
//     a[left] = a[right];
//     a[right] = temp;
//   }

//   if (a[left] !== 3) {
//     left++;
//   }

//   if (a[right] === 3) {
//     right--;
//   }
// }

// console.log(a);

// function checkSquareFrequency(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false; // Arrays must have the same length
//   }

//   // Create a frequency counter for arr2
//   const frequencyCounter = {};

//   // Count the frequency of each number in arr2
//   for (let i = 0; i < arr2.length; i++) {
//     const num = arr2[i];
//     frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
//   }

//   // Check if each number in arr1 is a square of a number in arr2 with a frequency of one
//   for (let i = 0; i < arr1.length; i++) {
//     const num = arr1[i];
//     let isSquare = false;

//     // Find the square manually by iterating through numbers
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] * arr2[j] === num) {
//         isSquare = true;
//         break;
//       }
//     }

//     if (!isSquare || frequencyCounter[arr2[i]] !== 1) {
//       return false;
//     }
//   }

//   return true;
// }

// // Example usage:
// const arr1 = [1, 4, 9, 31,16];
// const arr2 = [1, 2, 3, 4,6];
// console.log(checkSquareFrequency(arr1, arr2)); // Output: true

// const arr3 = [1, 4, 9, 16];
// const arr4 = [1, 2, 4, 4];
// console.log(checkSquareFrequency(arr3, arr4)); // Output: false

let obj  = {name:'jave'}
let obj2 = obj
 obj2.name='joy'
console.log(obj);