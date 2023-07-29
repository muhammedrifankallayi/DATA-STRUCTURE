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

    add(value){
        const node = new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            let curr = this.head
            while(curr.next!==null){
                 curr = curr.next
            }
            curr.next = node
        }
        this.size++

    }

display(){
    let curr  = this.head
    while(curr!==null){
        console.log(curr.value);
        curr = curr.next
    }
}

NthValue(n){
 let curr = this.head
for(let i=0;i<n;i++){
  curr = curr.next
}

return curr.value

}


}

const list = new List()

list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.add(60)
list.display()
console.log(`nthvalue = `+list.NthValue(4));
