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

console.log(root);
