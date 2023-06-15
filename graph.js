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
          
          for (let neighbor in this.adjacencyList) {
            if (visited[neighbor] == null) {
              visited[neighbor] = true;
              stack.push(neighbor);
            }
          }
        }
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
            const curr = queue.shift();
            val+=`-->${curr} `

            for (const neighbor in this.adjacencyList) {
                if (visited[neighbor]==null) {
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
        console.log(node);
        visited.add(node);
      
        const edges = this.adjacencyList[node];
        for (const edge of edges) {
          if (!visited.has(edge)) {
            this.fdfs(edge, visited);
          }
        }
      }
}
const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('C','B')
graph.addEdge('F','A')
graph.addEdge('B','A')
// graph.addVertex("G")
// graph.removeVertax('B')
// graph.addEdge('C','D')
// graph.addEdge('B','D')
// graph.addEdge('C','D')
// graph.addEdge('B','D')
// graph.removeEdge('B','C')
// graph.removeEdge('A','B')
// graph.removeVertax('A')
graph.display()

console.log(graph.dfs('A'));

// graph.display()
// graph.oo("B")
graph.fdfs("A")
// class hydra{
//     dsf(){
//         var visited={}
//         var  stack = []


//     }
// }