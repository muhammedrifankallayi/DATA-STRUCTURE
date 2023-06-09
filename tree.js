class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

// Usage example:
const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");

root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);




// simple binary search tree


class Node{
  constructor(value){
    this.value=value
    this.right=null
    this.left=null
  }
}


class Tree{
  constructor(){
    this.root=null
  }

  isEmpty(){
    return this.root===null
  }

  push(value){

    const node = new Node(value)
    if(this.isEmpty()){
      this.root=node
    }else{
      this.insertToTree(this.root,node)
    }
    }
    insertToTree(root,node){
      if(root.value<node.value){
        if(root.right===null){
          root.right=node
        }else{
          this.insertToTree(root.right,node)
        }
      }else{
        if(root.left===null){
          root.left=node
        }else{
          this.insertToTree(root.left,node)
        }
      }
    }
    display(){
      return this.root.right.value
    }

    search(root,value){
          
    if(root.value===value){
      return true
    }else if(value>root.value){
      return this.search(root.right,value)
    }else{
     return this.search(root.left,value)
    }

    }


PreOrder(root){
  if(root){
    console.log(root.value);
    this.PreOrder(root.left)
    this.PreOrder(root.right)
  }
  
}



inOrder(root){
  if(root){
    this.inOrder(root.left)
    console.log(root.value);
    this.inOrder(root.right)
  }
 
}

min(root){
  if(!root.left){
    return root.value
  }else{
  return  this.min(root.left)
  }
}

max(root){
  if(!root.right){
    return root.value
  }else{
    return  this.max(root.right)
  }
}


    PostOrder(root){
      if(root){
        this.PostOrder(root.left)
        this.PostOrder(root.right)
        console.log(root.value);
      }
    }

    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(node, value) {
      if (node === null) {
        return null;
      } else if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
        return node;
      } else {
        // Node to be deleted has been found
  
        // Case 1: No child or one child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
  
        // Case 2: Two children
        const minValue = this.min(node.right);
        
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
        return node;
      }
    }

}


const bst = new Tree()
 
 bst.push(19)
 bst.push(17)
 bst.push(25)
 bst.push(13)
 bst.push(9)
 bst.push(99)
 bst.push(72)
 bst.push(67)
 bst.push(88)

//  bst.PreOrder(bst.root)
// bst.inOrder(bst.root)
// console.log(bst.max(bst.root)+'-----Maxx');
// bst.delete(7)
// bst.PreOrder(bst.root)





//    heap..

class Heap{
  constructor(){
    this.Heap=[]
  }

Parent(child){
  return Math.floor((child-1)/2)
}
RightChild(parent){
  return parent*2+2
}
LeftChild(parent){
  return parent*2+1
}
upshift(){
var index = this.Heap.length-1
var parent = this.Parent(index)
while(this.Heap[index]>this.Heap[parent]){
  this.swap(parent,index)
  index=parent
  parent= this.Parent(index)
}

return

}
insert(value){
  this.Heap.push(value)
  this.upshift()
}

swap(i,j){
  let temp = this.Heap[i]
 this.Heap[i] = this.Heap[j]
 this.Heap[j] = temp
}

downshift(inx){
  var maxIndex=inx
  var rightChild = this.RightChild(inx)
  var LeftChild = this.LeftChild(inx)
if(this.Heap[maxIndex]<this.Heap[LeftChild]) {
  this.swap(maxIndex,LeftChild)
    maxIndex = LeftChild
  }else if(this.Heap[maxIndex]<this.Heap[rightChild]){
    this.swap(maxIndex,rightChild)
    maxIndex = rightChild
  }else{
  
    return 
  }
  this.downshift(maxIndex)
}
delete(){
  let root  = this.Heap[0]
  this.Heap[0] = this.Heap.pop()
  this.downshift(0)
  return root
}

display(){
  console.log(this.Heap);
}
add(val){
  this.Heap.unshift(val)
}
sort(){
  let j=[]
  for(let i = this.Heap.length-1 ; i>=0 ; i--){
    
      this.swap(0,i)
j.unshift(this.Heap.pop())
this.downshift(0)
  
  }
  [...this.Heap] = [...j]
  j=[]
}
}



const heap = new Heap()
heap.insert(78)
heap.insert(11)
heap.insert(9)
heap.insert(65)
heap.insert(8)
heap.insert(100)

heap.display()