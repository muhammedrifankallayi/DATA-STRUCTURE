class Nodes{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
class Tree{
    constructor(){
      this.root = null
    }
add(value){
    const node = new Nodes(value)

    if(this.root===null){
        this.root = node
    }else{
        this.insert(this.root,node)
    }
}
insert(root,node){
    if(root.value>node.value){
        if(root.left===null){
            root.left=node
        }else{
            this.insert(root.left,node)
        }
    }else{
        if(root.right===null){
            root.right=node
        }else{
            this.insert(root.right,node)
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
remove(value){
    this.removeNode(this.root,value)
}
removeNode(root,value){
   if(root===null){
    return null
   }

if(root.value<value){
    root.right = this.removeNode(root.right,value)
}else if(root.value>value){
    root.left = this.removeNode(root.left,value)
}else{

if(root.right===null&&root.left===null){
    return null
}
if(root.right===null){
    return root.left
}else if(root.left===null){
    return root.right
}

let Min = this.min(root.right)
root.value = Min
root.right = this.removeNode(root.right,Min)
}

return root


}

min(root){
    if(root.left===null){
        return root.value
    }else{
        this.min(root.left)
    }
}

}

const bst = new Tree()

bst.add(100)
bst.add(50)
bst.add(20)
bst.add(5)
bst.add(450)
bst.add(400)
bst.remove(20)
bst.preorder(bst.root)