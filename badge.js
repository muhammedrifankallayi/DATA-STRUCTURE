const arr =  [5,6,3,9,4,1,8,2,10,7]


 function swap(i,j){
let temp = arr[i]
arr[i] = arr[j]
arr[j]  = temp
}

// bubble sort


// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//      if(arr[j+1]<arr[j]){
//         swap(j+1,j)
//      }
//     }
// }

// insertion sort

for(let i = 1 ; i<arr.length;i++){

    let temp  = arr[i]
    let j = i-1
    
    while(j>=0&&arr[j]>temp){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=temp
    
    }

const g = arr.every((n)=>{
   
})




console.log(Date());

console.log(g);

// console.log(arr);