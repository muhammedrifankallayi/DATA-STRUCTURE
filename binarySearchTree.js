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
isValidBST(root) {
    return this.validateNode(root, -Infinity, Infinity);
  }

  validateNode(node, min, max) {
    if (node === null) {
      return true;
    }
    
    if (node.value <= min ||  max <= node.value) {
      return false;
    }
    
    const leftValid = this.validateNode(node.left, min, node.value);
    const rightValid = this.validateNode(node.right, node.value, max);
    
    return leftValid && rightValid;
  }



}

const t = new bst()
t.Add(5)
t.Add(6)
t.Add(4)
t.Add(8)
t.Add(1)
t.Add(2)
t.Add(9)
t.preorder(t.root)
console.log(t.isValidBST(t.root));
console.log(Infinity);