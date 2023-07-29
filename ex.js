
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


let array = [2,4,6,7,8,12,14,15,22,78,90]

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

    reverse(){
        let curr = this.head
        let prev = null
        while(curr!==null){
         let NewNode = curr.next
         curr.next = prev
         prev = curr
         curr = NewNode
        }
        this.head = prev
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
obj.reverse()
obj.dispaly()
// console.log(obj.peek()+` peek`);
// console.log(obj.getSize());

class DNode{
    constructor(value){
         this.value = value
         this.next = null
         this.prev = null
    }
}

class DList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
 append(value){
     const NewNode = new DNode(value)
     if(this.head===null){
        this.head = NewNode
        this.tail = NewNode
     }else{
        NewNode.prev = this.tail
        this.tail.next = NewNode
        this.tail  = NewNode
     }
 }

 dispaly(){
    let curr = this.head
    while(curr!==null){
        console.log(curr.value);
        curr = curr.next
    }
 }
 reverse(){
    let curr = this.tail
    while(curr!==null){
        console.log(curr.value);
        curr = curr.prev
    }
 }

}

const obj2 = new DList()
// obj2.append(10)
// obj2.append(12)
// obj2.append(13)
// obj2.append(15)
// obj2.append(11)
// obj2.append(19)
// obj2.append(100)
// obj2.append(17)
// obj2.append(18)
// obj2.dispaly()
// obj2.reverse()

// function Binary(arr, f, l, target) {
//     if (f > l) {
//       return "Not found";
//     }
  
//     const mid = Math.floor((l + f) / 2);
//     if (arr[mid] === target) {
//       return arr[mid] + " value found";
//     } else if (arr[mid] > target) {
//       return Binary(arr, f, mid - 1, target);
//     } else if (arr[mid] < target) {
//       return Binary(arr, mid + 1, l, target);
//     }
//   }
  
//   function execute(arr, t) {
//     return Binary(arr, 0, arr.length - 1, t);
//   }
  

// console.log(execute(array,222));



//   stack ......//

// class Stack{
//     constructor(){
//         this.items = []
//     }

// add(value){
//   this.items.push(value)
// }
// isEmpty(){
//     return this.items.length===0
// }
// peek(){
//     if(this.isEmpty()){
//      return "empty stack"
//     }
//     return this.items[this.items.length-1]
// }

// size(){
//     return this.items.length
// }

// dispaly(){
//     for(let i = this.items.length-1;i>=0;i--){
//         console.log(this.items[i]);
//     }
// }
// delete(val){
//     var num  = this.items.pop()
//     var arr = []
//   while(val!==num && this.items.length!==0){
//   arr.push(num)
//   num = this.items.pop()
//   }
//   if(this.isEmpty()){
//     console.log("this value Not found ");
//     return
//   }
//   while(arr.length>=1){
//     this.add(arr.pop())
//   }
  
// }


// }

// const s = new Stack()
// s.add(1)
// s.add(2)
// s.add(3)
// s.add(4)
// s.add(5)
// s.add(6)
// s.add(7)
// s.add(8)
// console.log("start");
// s.delete(5)
// s.dispaly()


// class Heap{

// constructor(){
//     this.heap = []
// }
// add(val){
//     this.heap.push(val)
//     this.shiftup(this.heap.length-1)
// }
// shiftup(index){
// var parent = this.parent(index)
// if(this.heap[parent]<this.heap[index]){
// this.swap(parent,index)
// this.shiftup(parent)
// }
// }


// shiftdown(index){
//  var rchild = this.Rchild(index) 
//  var lchild = this.Lchild(index)
//  var large =  this.heap[rchild]>this.heap[lchild]?rchild:lchild
//  if(this.heap[large]>this.heap[index]){
//     this.swap(large,index)
//     this.shiftdown(large)
//  }
  
// }


// Rchild(parent){
//     return Math.floor((parent*2)+2)
// }
// Lchild(parent){
//     return Math.floor((parent*2)+1)
// }

// parent(child){
//     return Math.floor((child-1)/2)

// }

// swap(i,j){
//     let temp = this.heap[i]
//     this.heap[i] = this.heap[j]
//     this.heap[j] = temp
// }
// dispaly(){
//     console.log(this.heap);
// }
// depth(inx){
//  if(inx===this.heap.length-1|| this.heap[inx]===undefined){
//     return 0
//  }

//  let rchild = this.Rchild(inx)
//  let lchild = this.Lchild(inx)

//  return Math.max(this.depth(rchild),this.depth(lchild))+1

// }


// }

// const h = new Heap()
// h.add(10)
// h.add(40)
// h.add(100)
// h.add(9)
// h.add(8)
// h.add(7)
// h.add(50)

// h.dispaly()
// console.log(h.depth(0)+`  depth `);


const objs = {
  name:"rifan",
  greet:function(arg,arg2){
   console.log(`hello ${this.name} and  your age is ${arg} or ${arg2}`);
  }
}

const objx={
    name:"messi"
}

objs.greet.apply(objx,[67,90])