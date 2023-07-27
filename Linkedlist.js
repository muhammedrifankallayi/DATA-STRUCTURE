

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
isEmpty(){
    return this.size===0
}
getSize(){
    return this.size
}

append(value){
    const node = new Node(value)
    
    if(this.isEmpty()){
        this.head=node
    }else{
let curr= this.head
        while(curr.next){
            curr= curr.next
        }
       curr.next=node
    }
    this.size++
    return this.head
}



prepend(value){
    const node = new Node(value)

    if(this.isEmpty()){
        this.head = node
    }else{
       node.next=this.head
       this.head=node
    }
    this.size++
}

print(){
    if(this.isEmpty()){
        return 'empty'
    }else{
let curr = this.head
let vall=[]

        while(curr){
vall.push(curr.value)
curr=curr.next
        }
        
        return vall
    }
    
}

add(value){

   const node = new Node(value)

   let prev = this.head
   while(prev.next){
    prev=prev.next
   }
   prev.next=node
   this.size++

}

    removeFrom(index){
        if(index<0||index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode=this.head
            this.head=removeNode.next
            this.size--
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
            this.size--
        }
        
        return removeNode.value
    }
    Removevalue(value){
                if(this.isEmpty()){
                    return null
                }else{
                    if(this.head.value===value){
                        this.head=this.head.next//it remember this.head.next = cheyyanam this.head leek
                        this.size--
                        return value
                    }else{
                        let prev=this.head
                        while(prev.next.value!==value){//prev.next.value=30.  prev.next.value==value akkumbool loop break akkunnu
                            prev=prev.next                       // brak ayivanna value aduth if conditionnileek pokunnu
                        }
                        if(prev.next){
                          let  removeNode=prev.next// prev.next removeNode le vekkunnu
                            prev.next=removeNode.next//remove nodete next eduth prev.next leek vekkunu 
                            this.size--
                            return value
                        }
                        return null
                    }
                }
            }
// to find middle value in non even series 

            Middle(){
                let curr = this.head
                let size =( this.size+1)/2
                for(let i=1;i<size;i++){
curr=curr.next

                }
                
                console.log(this.size);
                console.log(curr.value);
            }

          Reverse(){
            let next = null
            let pre = null
            let curr = this.head

            while(curr){
                next = curr.next
                this.head = curr
                curr.next= pre
                pre = curr
                curr=next
            }

          
          }
          SecLarge(){


            let Lar=0
            let SLar=0
            let curr = this.head
            for(let i=0;i<this.size;i++){
                if(curr.value>Lar){
                    Lar = curr.value
                    
                }
                if(curr.value>SLar&&curr.value<Lar){
                    SLar=curr.value
                }
                curr=curr.next
            }
            return SLar
        }

        firstunique(){
let curr = this.head
let a=[]
while(curr){

    let UNQ= true
    let temp = this.head

    while(temp){
        if(curr != temp && curr.value==temp.value){
            UNQ=false
            break;
        }
        temp=temp.next
    }
   
    if(UNQ){
      a.push(curr.value) 
    }
    curr=curr.next

}
return a
        }

        sumLast2(){
let curr = this.head
let next = curr.next
while(next.next){
    curr= curr.next
    next = next.next
}
return curr.value+next.value




        }
        convertArr(arr){

            for(let i=0;i<arr.length;i++){
                var node = new Node(arr[i])
            if(this.head==null){
                this.head = node
              
            }else{
               this.append(arr[i])
            }
            this.size++
            }
            
            
                }

}
const List = new LinkedList()

List.convertArr([1,2,3,4,5,6,6,7])

console.log(List.print());



