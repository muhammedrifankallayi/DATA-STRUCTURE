class Queue{
   constructor(){
    this.items=[]
    
   }
push(value){

this.items.push(value)

}

pop(){
   this.items.shift()
}

print(){
   this.items.forEach((v)=>{
   
      console.log(v);
   })
}

}

const q = new Queue()
// q.push(7)
// q.push(8)
// q.push(9)
// q.push(89)
// q.push(90)
// q.pop()
// q.print()


class QList{
   constructor(value){
      this.value = value
      this.next = null
      this.prev = null
   }
}

class QueListing{
   constructor(){
      this.front= null
      this.rear = null
      this.size = 0
   }

push(value){
   const node = new QList(value)

   if(this.front===null){
      this.front=node
      this.rear = node
   }else{
      node.prev = this.rear
      this.rear.next=node
      this.rear = node
   }
   this.size++

}
 
display(){
   let curr = this.front
   while(curr){
      console.log(curr.value);
      curr = curr.next
   }
}

remove(){
   let val =this.front
   this.front = this.front.next 
   return val.value
}

removeval(val) {
   let arr = [];
   let curr = this.front;
   
   while (curr !== null && curr.value !== val) {
     arr.push(this.remove());
     curr = this.front;
   }
   
   if (curr !== null && curr.value === val) {
     this.remove()
   }
   
   for (let i = 0; i < arr.length; i++) {
     this.push(arr[i]);
   }
 }
 

}

const ql = new QueListing()
ql.push(8)
ql.push(18)
ql.push(28)
ql.removeval(18)
ql.display()
