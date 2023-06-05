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


    PostOrder(root){
      if(root){
        this.PostOrder(root.left)
        this.PostOrder(root.right)
        console.log(root.value);
      }
    }

}




const bst = new Tree()
 
 bst.push(10)
 bst.push(8)
 bst.push(67)
 bst.push(97)
 bst.push(54)
 bst.push(67)
 bst.push(74)
 bst.push(2)
 bst.push(5)
 bst.push(337)
 bst.push(680)
 bst.push(11)
 
console.log();