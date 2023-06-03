// class stack{
// constructor(){
//     this.items=[]
//     this.maxValue=[]
//     this.middleStack=[]
// }

// isEmpty(){
//     return this.items.length===0
// }

// push(data){
    

//     if(this.items.length===0 ||data>this.maxValue[this.maxValue.length-1]){
//         this.maxValue.push(data)
//     }

//     if (this.middleStack.length === 0) {
//         this.middleStack.push(data);
//       } else {
//         const middle = this.middleStack[this.middleStack.length - 1];
//         if (this.items.length % 2 === 0) {
//           this.middleStack.push(middle);
//         } else {
//           this.middleStack.push(data);
//         }
//       }


//     this.items.push(data)
// }
// pop(){
//     this.items.pop()
// }
// peek() {
//     if (this.isEmpty()) {
//       return "No elements in the stack";
//     }
//     return this.items[this.items.length - 1];
//   }

//   print(){
//     this.items.forEach((v)=>{
//         console.log(v);
//     })
//   }

//   MaxValue(){
//     return this.maxValue[this.maxValue.length-1]
//   }
//   middleValue(){

// const size = this.items.length
// let middleElement

//     for (let i = 0; i < size; i++) {
//         const element = this.items.pop();
  
//         if (i === Math.floor(size / 2)) {
//           middleElement = element;
         
//         }
//       }
    
//       return middleElement;
//   }

// }

// const Stack = new stack()
// Stack.push(4)
// Stack.push(81)
// Stack.push(77)



// // linked

class ListStack{
    constructor(value){
        this.value=value
        this.next=null

    }
}

class liststack {
   constructor(){
    this.top=null
    this.size=0
   }

isEmpty(){
    return this.size === 0
}
push(data){
const node = new ListStack(data)
    if(this.top==null){
        this.top= node
    }else{
    node.next=this.top
      this.top=node
    }
this.size++
  

}
Pop(){
let curr = this.top

this.top=curr.next
this.size--
return curr
}

reverse(){
let ar=[]





}


display(){
    let curr = this.top
    let ar=''
    while(curr){
        ar+=` ${curr.value}`
       curr = curr.next 
    }
    console.log(ar);
}

}

const list = new liststack()
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(99)
list.Pop()
list.Pop()
list.display()








// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(value){
//         const node=new Node(value)
//         if(!this.front){
//             this.front=node;
//             this.rear=node
//         }
//         else{
//             this.rear.next=node
//             this.rear=node
//         }
//     }
//     dequeue(){
//         if(!this.front){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//         }
//     }
//     print(){
//         if(!this.front){
//             console.log("empty");
//         }
//         else{
//             let listValues=''
//             let temp=this.front
//             while(temp){
//                 listValues+=`${temp.value} `
//                 temp=temp.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list =new queue()

// list.enqueue(10)
// list.enqueue(20)
// list.enqueue(30)
// list.enqueue(40)
// list.enqueue(50)
// list.dequeue()
// list.dequeue()
// list.dequeue()
// list.print()



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     push(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.top=node
//         }
//         else{
//             node.next=this.top
//             this.top=node
//         }
//         this.size++
//     }
//     update(index,value){
//         var temp=[]
//         for(let i=0;i<index;i++){
//              temp[i]=this.top.value
//             this.pop()
//         }
//         this.push(value)
//         for(let i=0;i<index;i++){
//             this.push(temp[i])
//         }
//     }
//     mid(){
//         var mid=Math.floor(this.size/2)
//         console.log(mid);
//         var temp=[]
//         for(let i=0;i<mid;i++){
//             temp[i]=this.top.value
//             this.pop()
//         }
//         console.log(this.top.value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log('your node is empty')
//         }else{
//             this.top=this.top.next
//             this.size--
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('your node is empty')
//         }else{
//             let curr=this.top
//             let listValue=''
//             while(curr){
//                 listValue+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(listValue)
//         }
//     }
// }
// const stack=new Stack()
// const stack1=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.push(60)

// stack.update(1,800)

// stack.print()