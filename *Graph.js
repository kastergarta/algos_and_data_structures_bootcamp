// undirected graph
class Graph {
    constructor(){
      this.adjacencyList = {};
    }
  
     addVertex(vertex){
      if (!this.adjacencyList[vertex]) return this.adjacencyList[vertex] = [];
     }
  
     addEdge(v1,v2){
       this.adjacencyList[v1].push(v2);
       this.adjacencyList[v2].push(v1);
     }
  
     removeEdge(v1,v2){
         this.adjacencyList[v1] = this.adjacencyList[v1].filter(i => i !== v2);
         this.adjacencyList[v2] = this.adjacencyList[v2].filter(i => i !== v1);
     }
  
     removeVertex(vertex){
         while(this.adjacencyList[vertex].length){
             const adjacentVertex = this.adjacencyList[vertex].pop();
             this.removeEdge(vertex, adjacentVertex);
         }
         delete this.adjacencyList[vertex]
     }
  
     depthFirstRecursive(start){
         const result = [];
         const visited = {};
         const adjacencyList = this.adjacencyList;
  
         (function dfs(vertex){
             if(!vertex) return null;
             visited[vertex] = true;
             result.push(vertex);
         })(start)
     }
  
  }
  
  let g = new Graph();
  g.addVertex('NY');
  g.addVertex('LA');
  g.addVertex('HK');
  g.addEdge('NY', 'LA');
  g.addEdge('LA', 'HK');
  g.removeEdge('LA', 'NY');
  g.addEdge('NY', 'LA');
   