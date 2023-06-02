class Node{
    constructor(data){
        this.data = data
        this.next=null
        this.prev=null
    }
}

class DoubleList{


constructor(){
    this.head=null
    this.tail=null
}

append(value){

    const newNode = new Node(value)

    if(this.head===null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      
      
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

}
display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  previ(val){

  let curr = this.head

  while(curr.data !== val){
    curr=curr.next
  }
  if(curr.prev== null){
    return null
  } 
  else{
    return curr.prev.data
  }


  }
   

prime(){
    let curr = this.head
    let arr = []
    let flag
   
    while(curr){
        let size = curr.data
        flag=true
        for (let i=2;i<size;i++){
            if(size%i!==0){
            flag= false
            }else{
                flag=true
                break;
               
            }
            if(i==size-1&&flag==false){
               arr.push(curr.data)
            }
        }
        curr = curr.next
    }
    return arr
}

}
const List = new DoubleList()

List.append(6)
List.append(7)
List.append(3)
List.append(8)
List.append(9)

List.display()

console.log('num:'+List.previ(6));
console.log('prime'+List.prime());