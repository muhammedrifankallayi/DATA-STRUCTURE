class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // Display the graph structure
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + ' --> ' + JSON.stringify(this.adjacencyList[vertex]));
    }
  }
}

// Create a new instance of the weighted graph
const weightedGraph = new WeightedGraph();

// Add vertices
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');

// Add weighted edges
weightedGraph.addEdge('A', 'B', 5);
weightedGraph.addEdge('B', 'C', 3);
weightedGraph.addEdge('C', 'D', 7);
weightedGraph.addEdge('D', 'A', 2);

// Display the graph
weightedGraph.display();
