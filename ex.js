
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
 
// function quickSort(arr, f, l) {
//     if (f < l) {
//       let pivot = partition(arr, f, l);
//       quickSort(arr, f, pivot - 1);
//       quickSort(arr, pivot + 1, l);
//     }
//   }
  
//   function partition(arr, i, j) {
//     let low = i;
//     let high = j;
//     let pivot = arr[low];
  
//     while (low < high) {
//       while (arr[low] <= pivot ) {
//         low++;
//       }
//       while (arr[high] > pivot) {
//         high--;
//       }
//       if (low < high) {
//         let temp = arr[low];
//         arr[low] = arr[high];
//         arr[high] = temp;
//       }
//     }
  
//     let temp = arr[i];
//     arr[i] = arr[high];
//     arr[high] = temp;
  
//     return high;
//   }


  //  merge sort

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

let arr = [5,6,3,22,4,9,1,2]
// console.log(mergeSort(arr));
// console.log(arr);


// class NNode{
//   constructor(value){
//     this.value =value
//     this.right = null
//     this.left = null
//   }
// }


// class bst{
//   constructor(){
//     this.head = null
//   }
// append(val){
//   const node = new NNode(val)
//   if(this.head===null){
// this.head = node
//   }else{
//     this.addval(this.head,node)
//   }
// }

// addval(root,node){
//   if (root.value < node.value) {
//     if (root.right === null) {
//       root.right = node;
//     } else {
//       this.addval(root.right, node);
//     }
//   } else {
//     if (root.left === null) {
//       root.left = node;
//     } else {
//       this.addval(root.left, node);
//     }
//   }
// }

// preorder(root){
//   if(root!==null){
//     console.log(root.value);
//     this.preorder(root.left)
//     this.preorder(root.right)
//   }
// }
// }

// const d = new bst()

// d.append(6)
// d.append(11)
// d.append(91)

// d.append(32)
// d.append(9)
// d.append(45)
// d.append(3)
// d.preorder(d.head)


let array = [4,5,9,1,3,8,13]

// const h = array.map((val,ind)=>{
//  console.log(val);
// })
// console.log(h);

class Node{
    constructor(value){
       this.value = value
       this.next = null
    }
}

class List{
    constructor(){
        this.head = null
        this.size = 0
    }

    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }
    peek(){
        return this.head.value
    }

    append(value){
        const node = new Node(value)
        if(this.head===null){
            this.head = node
            this.size++
        }else{
            let curr = this.head
            while(curr.next!==null){
                curr = curr.next
            }

            curr.next = node
            this.size++

        }
    }

    dispaly(){
      let  curr = this.head
      while(curr!==null){
        console.log(curr.value);
        curr = curr.next
      }
    }
    
}

const obj = new List()
obj.append(1)
obj.append(2)
obj.append(3)
obj.append(4)
obj.append(5)
obj.append(6)
obj.append(7)
obj.append(8)
obj.dispaly()
console.log(obj.peek()+` peek`);
console.log(obj.getSize());