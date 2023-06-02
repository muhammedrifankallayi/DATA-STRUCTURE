class Node{
constructor(data){
    this.value=data
    this.next = null
    this.prev = null
}
}

class List {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

append (data){

const node = new Node(data)
  
if(this.head === null){
    this.head = node
    this.tail = node
    this.size++
}else{
    
node.prev = this.tail
this.tail.next = node
this.tail= node
this.size++


}
this.size++
}

display(){

    let curr = this.head
    while(curr){
        console.log(curr.value);
        curr = curr.next
    }
}
  
previo(val){
    let curr = this.head

while(curr.value!==val){
    curr = curr.next
}



  


console.log(curr.next.value);

}
 convertArr(arr){

for(let i=0;i<arr.length;i++){
    var node = new Node(arr[i])
if(this.head==null){
    this.head = node
    this.tail = node
}else{
    node.prev = this.tail
    this.tail.next=node
    this.tail = node
}
this.size++
}


    }
 remove(value){

    if(this.head.value === value){
        this.head = this.head.next
        this.size--
    }else{
        let curr = this.head

        while(curr.next.value !== value){
        
        curr = curr.next
        
        }
        let dnode = curr.next
        curr.next = dnode.next
        this.size--

    }
    



 }

middleDel(){
    let len = Math.ceil(this.size/2)

    let i = 1
    let curr = this.head
    while(i!=len){
      curr = curr.next
      i++
    }
    console.log(curr.value);
}



}

const lis = new List()
lis.convertArr([1,2,3,5,66,8,7])

lis.middleDel()

