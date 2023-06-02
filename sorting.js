// function spits(arr){

// if(arr.length<2){
//     return arr
// }
// var mid  = Math.floor(arr.length/2)
// var left = arr.slice(0,mid)
// var right= arr.slice(mid)

// return merge(spits(left),spits(right))


// }


// function  merge(left,right){


// var nArray = []

// while(left.length&&right.length){

// if(left[0]<right[0]){

//     nArray.push(left.shift())
// }else{
//     nArray.push(right.shift())
// }


// }

// return [...nArray,...left,...right]

// }

// const arr = [90,74,56,9,5,67,34,55,89]

// console.log(Quick(arr,0,arr.length-1));


// function Quick(Arr,left,right){


//     if(left<right){
//         var part = partition(Arr,left,right)
//         Quick(Arr,part+1,right)
//         Quick(Arr,left,part-1)

//     }

// return Arr


// }

// function partition(arr,left,right){

// var pivot = arr[right]

// var i = left-1

// for(let j=left;j<right;j++){

// if(arr[j]<pivot){
//     i++;
// swap(arr,i,j)
// }

// }
// swap(arr,i+1,right)
// return i+1



// }
// function swap(arr,i,j){
//     let temp = arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }


let arr = [7,4,5,6,99,45,3,9,34]

for(let i=0 ; i<arr.length-1 ; i++){

 let j = i

 while(j<arr.length){

    if(arr[i]>arr[j]&&j!=i){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    
    }
console.log(arr);
console.log(i+'----------');
    j++

 }
}
