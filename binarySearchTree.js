class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
class bst {
    constructor(){
        this.root = null
    }

Add(value){

    const node = new Node(value)
    if(this.root===null){
        this.root = node
    }else{
        this.AddToLeaf(this.root,node)
    }
}
AddToLeaf(root,node){
    if(root.value>node.value){
        if(root.left===null){
            root.left=node
        }else{
            this.AddToLeaf(root.left,node)
        }
    }else{
        if(root.right===null){
            root.right=node
        }else{
            this.AddToLeaf(root.right,node)
        }
    }
}

preorder(root){
    if(root){
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }
}

//    BINARY SEARCH TREE VALIDATION

isValidBST(){
    return this.validnode(this.root,this.root.left,this.root.right)
}
validnode(root,min,max){
    if(root===null){
        return true
    }

    if(root.value<=min || root.value>=max){
        return false
    }

    const right = this.validnode(root.right,root.value,max)
    const left = this.validnode(root.left,min,root.value)
    return right&&left
}

//   REMOVE A NODE VALUE FROM TREE


Remove(value){
    this.RemoveNode(this.root,value)
}
RemoveNode(root,value){
if(root.value>value){
root.left = this.RemoveNode(root.left,value)
return root 
}else if(root.value<value){
 root.right =  this.RemoveNode(root.right,value)
 return root 
}else{
  if(root.right===null&&root.left===null){
    return null
  }
  if(root.right===null){
    return root.left
  }
  
  if(root.left===null){
    return root.right
  }
  

  let small = this.min(root.right)
  root.value = small
  root.right = this.RemoveNode(root.right,small)

 
}

}
min(root){
   if(root.left===null){
       return root.value
   }else{
    this.min(root.left)
   }
}

//  CHECKING THE TREE IS BALANCED OR NOT

isBalanced(root){
  if(root.right===null&&root.left===null){
    return true
  }
  if(root.right===null&&root.left||root.left===null&&root.right){
    return false
  }

const right = this.isBalanced(root.right) 
const left = this.isBalanced(root.left)
return right&&left

}

// FINDING THE DEPTH OF THE TREE

getDepth(node) {
    if (node === null) {
      return 0;
    }
    
    const leftDepth = this.getDepth(node.left);
    const rightDepth = this.getDepth(node.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
  }

//  INVERTING  THE  TREE 

inevert(root){
    if(root===null){
        return null
    }

let temp = root.left
root.left = root.right
root.right = temp 

this.inevert(root.left)
this.inevert(root.right)

return root


}
}

const t = new bst()
t.Add(20)
t.Add(10)
t.Add(30)
t.Add(5)
t.Add(11)
t.Add(40)
t.Add(1000)
t.preorder(t.root)
console.log(t.isValidBST());
