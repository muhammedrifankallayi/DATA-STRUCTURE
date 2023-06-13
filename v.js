class heap{
    constructor(){
        this.items = []
    }
insert(value){
this.items.push(value)
}

shiftup(){
    let size = this.items.length-1
    let p = this.parent(size)
    while(this.items[size]>this.items[p]){

    }
}

parent(child){
  return Math.floor((child-1)/2)
}

rightChild(parent){
    return  parent*2+2
}
leftChild(parent){
    return parent*2+1
}

swap(i,j){
  let temp = this.items
}


}



isBinary(root){
    let root 
let rchild = right(root)
let lchild = left(root)

if(root.right===null){
    return true
}

if(root.value<rchild&&lchild<root.value){
   
    isBinary(rchild)
    isBinary(lchild)
}else{
    return false
}

}