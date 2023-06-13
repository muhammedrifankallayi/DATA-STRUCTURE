class BSt{
    constructor(value){
        this.value = value
        this.right= null
        this.left = null
    }
}

class Treee{
    constructor(){
        this.root = null
    }

Insert(value){
const node = new BSt(value)
if(this.root===null){
    this.root=node
}else{
this.InsertValue(this.root,node)
}

}
InsertValue(root,node){
   if(root.value>node.value){
    if(root.left===null){
        root.left = node
    }else{
        this.InsertValue(root.left,node)
    }
   }else{
    if(root.right===null){
        root.right = node
    }else{
        this.InsertValue(root.right,node)
    }
   }
}


delete(value){
  this.deleteNode(this.root,value)
}
deleteNode(root, value) {
    if (root === null) {
      return null;
    }
  
    if (root.value > value) {
      root.right = this.deleteNode(root.right, value);
    } else if (root.value < value) {
      root.left = this.deleteNode(root.left, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      let minimum = this.min(root.right);
      root.value = minimum;
      root.right = this.deleteNode(root.right, minimum);
    }
  
    return root;
  }
  
  preorder(root){
    if(root){
        console.log(root.value);
    this.preorder(root.left)
    
    this.preorder(root.right)
    }
}

min(root){
    if(!root.left){
        console.log(root.value+"ll");
        return root.value
    }else{
        this.min(root.left)
    }
}


}

const cv = new Treee()
cv.Insert(45)
cv.Insert(35)
cv.Insert(25)
cv.Insert(65)
cv.Insert(75)
cv.delete(65)
// cv.deleteNode(cv.root,65)
cv.preorder(cv.root)
cv.min(cv.root)



// Binary search tree node definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to check if a binary tree is a valid BST
function isValidBST(root) {
  return isValidBSTHelper(root, null, null);
}

// Helper function for validating BST
function isValidBSTHelper(node, min, max) {
  // Base case: an empty tree is a valid BST
  if (node === null) {
    return true;
  }

  // Check if the current node violates the BST property
  if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
    return false;
  }

  // Recursively validate the left and right subtrees
  return (
    isValidBSTHelper(node.left, min, node.value) &&
    isValidBSTHelper(node.right, node.value, max)
  );
}