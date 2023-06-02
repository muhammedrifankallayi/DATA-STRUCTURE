



function binary(arr,left,right,value){
let mid = Math.floor(( left+right)/2)

   if(left>right){
 return -1

   }
   if(arr[mid]==value){
    return arr[mid]
   }
if(arr[mid]<value){
    return binary(arr,mid+1,right,value)
}
if(arr[mid]>value){
    return binary(arr,left,mid-1,value)
}
 
       
    
    
    }




let arr = [3,5,6,8,9,3,9]

const d =binary(arr,0,arr.length,9)
console.log(d);



