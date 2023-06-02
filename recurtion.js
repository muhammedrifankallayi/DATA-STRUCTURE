

// function recurtion(n){
//     if(n<=1){
//         return n
//     }

//     return n*recurtion(n-1)
// }


// console.log(recurtion(18));


function reverseArray(arr, start, end) {
    if (start >= end) {
      return; // Base case: array is reversed
    } else {
    
      [arr[start], arr[end]] = [arr[end], arr[start]];
      reverseArray(arr, start + 1, end - 1); 
    }
  }
  
  let myArray = [1, 2, 3, 4, 5,6,7,9];
  reverseArray(myArray, 0, myArray.length - 1);
  console.log(myArray);
  
