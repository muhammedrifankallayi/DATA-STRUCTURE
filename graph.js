// graph

class Graph{
    constructor(){
        this.adjacencyList={}
    }

    // TO ADD VERTEX IN THE GRAPH (PARENT ROOT)
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    oo(v){
        let arr = []
      for (let i of this.adjacencyList[v]){
arr.push(i)
      }
      console.log(arr);
    }

    // TO ADD EDGES TO THE VERTEX 
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

   // TO CHECK THE VERTEX HAS THE EDGE
    hasEdge(vertax1,vertax2){
        return (
            this.adjacencyList[vertax1].has(vertax2)&&
            this.adjacencyList[vertax2].has(vertax1)
        )
    }

    // TO REMOVE EDGE FROM THE VERTEX 

    removeEdge(vertax1,vertax2){
        this.adjacencyList[vertax1].delete(vertax2)
        this.adjacencyList[vertax2].delete(vertax1)
    }

    // DEPTH FIRST SEARCH 

    dfs(startVertex) {
        let stack = [];
        let visited = {};
      let val=''
        visited[startVertex] = true;
        stack.push(startVertex);
      
        while (stack.length) {
          let curr = stack.pop();
val+=` ${curr} -->`
          
          for (let neighbor of this.adjacencyList[curr]) {
            if (visited[neighbor] !==true )  {
              visited[neighbor] = true;
              stack.push(neighbor);
            }
          }
        }
        console.log(this.adjacencyList);
        return val
      }

      // BREDTH FIRST SEARCH 
      
        bfs(startVertex) { 
        const visited = {};
        const queue = [];
        let val =  ''
        visited[startVertex] = true;
        queue.push(startVertex);

        while (queue.length) {
            var curr = queue.shift();
            val+=`-->${curr} `

            for (const neighbor of this.adjacencyList[curr]) {
                if (visited[neighbor]!==true) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                   
                }
               }    
}
console.log(val);
}

   // TO REMOVE A VERTEX 

    removeVertax(vertax){
        if(!this.adjacencyList[vertax]){
            return
        }
        for(let adjecentVertax of this.adjacencyList[vertax]){
            console.log(adjecentVertax+'evertacil ull edej pokkunnu')
            this.removeEdge(vertax,adjecentVertax)
        }
        delete this.adjacencyList[vertax]
    }
// TO DISPLAY THE GRAPH STRUCTURE

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'-->'+[...this.adjacencyList[vertex]])
        }
    }
    fdfs(node, visited = new Set()) {
        console.log(`${node}-->`);
        visited.add(node);
      
        const edges = this.adjacencyList[node];
        for (const edge of edges) {
          if (!visited.has(edge)) {
            this.fdfs(edge, visited);
          }
        }
      }

      //  CHECKING IN THE GRAPH CYCLE EXIST


      isCyclicUtil(vertex, visited, parent) {
        visited[vertex] = true;
    
        for (const neighbor of this.adjacencyList[vertex]) {
            // console.log(neighbor);
          if (!visited[neighbor]) {
            if (this.isCyclicUtil(neighbor, visited, vertex)) {
              return true;
            }
          } else if (neighbor !== parent) {
            return true;
          }
        }
    
        return false;
      }
    
      // Function to check for cycles in the graph
      isCyclic(startVertex) {
        const visited = {};
    
        for (const vertex in this.adjacencyList) {
            console.log(vertex);
          visited[vertex] = false;
        }
    
        if (this.isCyclicUtil(startVertex, visited, null)) {
          return true;
        }
    
        return false;
      }

     
}
const graph=new Graph()

graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','A')
// graph.addEdge('B','A')
graph.addVertex("H")

// graph.display()

 console.log(graph.isCyclic("A"));



//   SPANNING TREE 


//   Its a sub graph of undirected connected graph 







// class hydra{
//     dsf(){
//         var visited={}
//         var  stack = []


//     }
// }
// console.log(graph.isCyclic("A"));