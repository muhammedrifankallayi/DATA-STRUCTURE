class Node {
    constructor(data) {
        this.value = data
        this.next = null
        this.prev = null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(data) {

        const node = new Node(data)

        if (this.head === null) {
            this.head = node
            this.tail = node
            this.size++
        } else {

            node.prev = this.tail
            this.tail.next = node
            this.tail = node
            this.size++


        }
        this.size++
    }

    display() {

        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }

    previo(val) {
        let curr = this.head

        while (curr.value !== val) {
            curr = curr.next
        }






        console.log(curr.next.value);

    }
    convertArr(arr) {

        for (let i = 0; i < arr.length; i++) {
            var node = new Node(arr[i])
            if (this.head == null) {
                this.head = node
                this.tail = node
            } else {
                node.prev = this.tail
                this.tail.next = node
                this.tail = node
            }
            this.size++
        }


    }
    remove(value) {

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
        } else {
            let curr = this.head

            while (curr.next.value !== value) {

                curr = curr.next

            }
            let dnode = curr.next
            curr.next = dnode.next
            this.size--

        }




    }

    middleDel() {
        let len = Math.ceil(this.size / 2)

        let i = 1
        let curr = this.head
        while (i != len) {
            curr = curr.next
            i++
        }
        console.log(curr.value);
    }



}

const lis = new List()










//  binary search tree

class BST {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class Tree {
    constructor() {
        this.root = null

    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        if (this.root === null) {
            const node = new BST(value)
            this.root = node
        } else {
            this.insertValue(this.root, value)
        }
    }

    insertValue(root, value) {
        const node = new BST(value)
        if (value > root.value) {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertValue(root.right, value)
            }
        } else {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertValue(root.left, value)
            }
        }
    }

    display() {
        this.root.left ? console.log(this.root.left.value) : console.log(null);
        return
    }

    search(root, value) {
        if (root.value === value) {
            return true
        } else if (root.value < value) {
            if (root.right) {
                return this.search(root.right, value)
            }
            return null


        } else {
            if (root.left) {
                return this.search(root.left, value)
            }
            return null
        }
    }
    preorder(root) {

        if (root) {
            console.log(root.value);
            this.preorder(root.right)
            this.preorder(root.left)
        }

    }
    inorder(root) {

        if (root) {
            this.inorder(root.right)
            console.log(root.value);
            this.inorder(root.left)
        }
    }
    postorder(root) {
        if (root) {
            this.postorder(root.right)
            this.postorder(root.left)
            console.log(root.value);
        }
    }


    delete(value) {
        this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return null
        } else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
            return root
        } else if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
            return root
        } else {
            // value position found thats way here

            if (root.right == null) {
                return root.left
            } else if (root.left === null) {
                return root.right
            } else {
                let mini = this.min(root.right)
                root.value = mini
                root.right = this.deleteNode(root.right, mini)
                return root
            }



        }
    }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }

    }
    isBST(root) {
        let prev = null;

        function inOrderTraversal(node) {
            if (node === null) {
                return true;
            }

            if (!inOrderTraversal(node.left)) {
                return false;
            }

            if (prev !== null && node.value <= prev) {
                return false;
            }

            prev = node.value;

            return inOrderTraversal(node.right);
        }

        return inOrderTraversal(root);
    }

    // Output: true

}


const tree = new Tree()

tree.insert(10)
tree.insert(15)
tree.insert(6)
tree.insert(8)
tree.insert(9)
tree.insert(7)
tree.insert(3)
tree.insert(33)

// uncomment to see the working of the code 

// console.log(tree.isEmpty()); 
// tree.display()

// console.log("is exist? = "+tree.search(tree.root,9));
// tree.preorder(tree.root)
// tree.delete(6)
// tree.preorder(tree.root)
// console.log(tree.isBST(tree.root)); 

// tree.inorder(tree.root)



class Graph {
    constructor() {
        this.adList = {}
    }

    addVertex(vertax) {

        if (!this.adList[vertax]) {
            this.adList[vertax] = new Set()
        }

    }
    addEdges(vertax1,vertax2){
        if (!this.adList[vertax1]) {
            this.addVertex(vertax1)
        }
        if (!this.adList[vertax2]) {
            this.addVertex(vertax2)
        }
this.adList[vertax1].add(vertax2)
this.adList[vertax2].add(vertax1)

    }

    removeEdges(vertax1,vertax2){
        this.adList[vertax1].delete(vertax2)
        this.adList[vertax2].delete(vertax1)
    }

    removeVertex(vertax){
if(!this.adList[vertax]){
    return null
}

      for(let v of this.adList[vertax]){
        
        this.removeEdges(vertax,v)
      }
      delete this.adList[vertax]
    }

    display(){
        for(let i in this.adList){
            console.log(i+' --> '+[...this.adList[i]]);
        }
    }
}

const graph = new Graph()
// graph.addVertex('X')
// graph.addEdges('a','b')
// graph.addEdges('X','a')
// graph.display()
// graph.removeEdges('X','a')
// graph.display()

class Trie{
    constructor(){
        this.children={}
        this.end=false
    }
}

class tries{
    constructor(){
        this.root = new Trie()
    }

    prefix(word){
        for(let i=0;i<word.length;i++){

        }
    }
    populatePrifix(size,word){
        let curr = this.root
for(let i=0 ; i<=size;i++){
    let char = word[i]
    if(!curr.children[char]){
        curr.children[char]= new Trie()
    }
    curr = curr.children[char]
}
this.end= true
    }
}


