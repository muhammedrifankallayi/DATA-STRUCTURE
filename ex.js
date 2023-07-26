
const user = [
    {
        name: 'ajmla',
        hobby: ['football', 'sports']
    },
    {
        name: 'salim',
        hobby: ['writing', 'running']
    },
    {
        name: 'fasil',
        hobby: ['walking', 'sports', 'faster', 'singing']
    },
    {
        name: 'anagha',
        hobby: ['running', 'football', 'sports']
    },
];

// for(let i=0;i<user.length;i++){
//     setTimeout(() => {
//       console.log(user[i].name);
//     }, 3000)
    
//     user[i].hobby.forEach((val)=>{
//         setTimeout(() => {
//             console.log(val);
//         }, 6000);
//     })
   
// }

// real answer...>

// const printNumbersSync =async ()=> {
//   for(let i=0;i<user.length;i++){
//       await new Promise(resolve => {
//         setTimeout(() => {
//           console.log(user[i].name);
         
//           resolve();
//         }, 1000);
//       });
//       for(let j=0;j<user[i].hobby.length;j++){
//         await new Promise(resolve => {
//           setTimeout(() => {
//             console.log("hobby:"+user[i].hobby[j]);
           
//             resolve();
//           }, 1000);
//         });
//       }
//     }
//   }
  
//   printNumbersSync();
 
function quickSort(arr, f, l) {
    if (f < l) {
      let pivot = partition(arr, f, l);
      quickSort(arr, f, pivot - 1);
      quickSort(arr, pivot + 1, l);
    }
  }
  
  function partition(arr, i, j) {
    let low = i;
    let high = j;
    let pivot = arr[low];
  
    while (low < high) {
      while (arr[low] <= pivot ) {
        low++;
      }
      while (arr[high] > pivot) {
        high--;
      }
      if (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
      }
    }
  
    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
  
    return high;
  }


  //  merge sort

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from the left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from the right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}






let arr = [5,6,3,22,4,9,1,2]
console.log(mergeSort(arr));
// console.log(arr);