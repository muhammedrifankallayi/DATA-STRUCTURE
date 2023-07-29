

// let a = [4,9,27,59,71,84,100]
// let val = 100

// let size = a.length

// let left = 0
// let right = size-1

// while(left<=right){
// let mid = Math.floor((left+right)/2)
//     if(a[mid]==val){
//          console.log('value found'+ a[mid]);
//     }
//     if(a[mid]>val){
//         right=mid-1
//     }else{
//         left=mid+1
//     }


// }



// bubble sort ........................................

// function bubble(arr){

// for(let i=0;i<arr.length-1;i++){

// for(let j=0;j<arr.length-1-i;j++){
// if(arr[j]<arr[j+1]){
//     let temp = arr[j+1]
//     arr[j+1]=arr[j]
//     arr[j]=temp
// }
// }

// }
// return arr

// }
// const arr = [78,34,89,2,46,897,456,2377,87,91]
// console.log(bubble(arr));



//       insertion sorting


// let arr = [2,4,5,6,99,45,3,1,34]

// for(let i = 1 ; i<arr.length;i++){

// let temp  = arr[i]
// let j = i-1

// while(j>=0&&arr[j]>temp){
//     arr[j+1]=arr[j]
//     j--
// }
// arr[j+1]=temp

// }
// console.log(arr);







//   selection sorting ...................................



// let arr = [2,4,5,6,99,45,3,1,34]

// for(let i=0 ; i<arr.length-1 ; i++){

//  let j = i

//  while(j<arr.length){

//     if(arr[i]>arr[j]&&j!=i){
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
    
//    }
//     j++

//  }
// }
// console.log(arr);






// quick sort .............................


// function quickSort(arr, low, high) {
//    if (low < high) {
//      let pivotIndex = partition(arr, low, high);
//      quickSort(arr, low, pivotIndex - 1);
//      quickSort(arr, pivotIndex + 1, high);
//    }
//  }
 
//  function partition(arr, low, high) {
//    let pivot = arr[high];
   
//    let i = low -1   ;
//    for (let j = low; j < high; j++) {
 
   
//      if (arr[j] < pivot) {
 

//        i++;
      
//        swap(arr, i, j);
//      }
//    }
 
//    swap(arr, i + 1, high);
//    return i + 1;
//  }
 
//  function swap(arr, i, j) {
//    let temp = arr[i];
  
//    arr[i] = arr[j];
//    arr[j] = temp;
//  }
 
//  let arr = [2, 4, 5, 6, 99,290, 45, 3, 1, 34];
//  quickSort(arr, 0, arr.length - 1);
//  console.log(arr);






 
//.....................................................................


// function recurse(arr,f,l){

//   if(f>1){
//     let pivote = pivotes(arr,f,l)
//   recurse(arr,pivote+1,l)
//   recurse(arr,f,pivote-1)
//   }
  
//   }




// function pivotes(arr,i,j){
// let low = i
// let high = j
// let pivo = arr[low]

// while(low<high){
// while(arr[low+1]<pivo){
//   low++
// }
// while(arr[high]>pivo){
//   high--
// }
//   let temp = arr[low]
//   arr[low] = arr[high]
//   arr[high] = temp
// }
// let temp = arr[low]
// arr[low] = arr[high]
// arr[high] = temp
// return low
// }

// let arr = [8, 4, 5, 6, 99,290, 45, 3, 1, 34];

// recurse(arr,0,arr.length-1)


// function quickSort(arr, f, l) {
//   if (f < l) {
//     let pivot = partition(arr, f, l);
//     quickSort(arr, f, pivot - 1);
//     quickSort(arr, pivot + 1, l);
//   }
// }

// function partition(arr, i, j) {
//   let low = i;
//   let high = j;
//   let pivot = arr[low];

//   while (low < high) {
//     while (arr[low] <= pivot ) {
//       low++;
//     }
//     while (arr[high] > pivot) {
//       high--;
//     }
//     if (low < high) {
//       let temp = arr[low];
//       arr[low] = arr[high];
//       arr[high] = temp;
//     }
//   }

//   let temp = arr[i];
//   arr[i] = arr[high];
//   arr[high] = temp;

//   return high;
// }

// let arr = [8, 4, 5, 6, 99, 290, 45, 3, 1, 34];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
 
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add remaining elements from the left array
//   while (leftIndex < left.length) {
//     result.push(left[leftIndex]);
//     leftIndex++;
//   }

//   // Add remaining elements from the right array
//   while (rightIndex < right.length) {
//     result.push(right[rightIndex]);
//     rightIndex++;
//   }

//   return result;
// }

// // Example usage:
// const array = [5, 2, 9, 6, 1, 8, 4, 7, 3];
// const sortedArray = mergeSort(array);
// console.log(sortedArray);

// function mergeSort(arr){

// if(arr.length<2){
//   return arr
// }
// const  mid  = Math.floor(arr.length/2)
// const leftArr = arr.slice(0,mid)
// const rightArr = arr.slice(mid)

// return merge(mergeSort(leftArr),mergeSort(rightArr))

// }


// function merge(left,right){

// var sorted = []
// while(left.length&&right.length){
//   if(left[0]<=right[0]){
// sorted.push(left.shift())
//   }else{

// sorted.push(right.shift())


//   }

// }
// console.log( [...sorted,...left,...right]);
// return [...sorted,...left,...right]



// }



// let arr = [8,99,56,34,89,9,4,33]

//  console.log(mergeSort(arr)); 