const array = [6,8,13,14,10,3,2,1,12,5,4,7,9,15,11]


function Bubble(arr){

for(let i = 0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] =arr[j+1]
            arr[j+1]= temp  
        }
    }
}
return arr

}

function Insertion(arr){

for(let i = 1 ; i< arr.length; i++){

let val = arr[i]
let j = i-1
while(j>=0&&arr[j]>val){

arr[j+1]=arr[j]
j--
}
arr[j+1]=val

}
return arr
}



function SelectionSort(arr){

for(let x=0;x<arr.length;x++){
let j=x
while(j<arr.length){
    if(arr[x]>arr[j]&&x!==j){
        let temp = arr[j]
        arr[j]=arr[x]
        arr[x]=temp
        
    }
    j++
}


}
return arr


}





function QuickSort(arr,left,right){

   if(left<right){
    var part = Partition(arr,left,right)

    QuickSort(arr,left,part-1)
    QuickSort(arr,part+1,right)
   }
return arr
}
function Partition(arr,left,right){

let Pivote = arr[right]
let j = left-1
for (let i = left ; i<right ; i++){

if(arr[i]<Pivote){
    j++;
    swap(arr,j,i)
}


}
swap(arr,j+1,right)
return j+1


}
function swap(arr,j,i){
    let temp = arr[j]
    arr[j]=arr[i]
    arr[i]=temp
}



function MergeSort(arr){
    if(arr.length<2){
        return arr
    }
    var mid = Math.floor(arr.length/2)
    var left = arr.slice(0,mid)
    var right = arr.slice(mid)

    return Merge(MergeSort(left),MergeSort(right))

}

function Merge(left,right){

let Array = []

while(left.length&&right.length){
    if(left[0]>right[0]){
        Array.push(right.shift())
    }else{
        Array.push(left.shift())

    }
}
return [...Array,...left,...right]
}

console.log(MergeSort(array));