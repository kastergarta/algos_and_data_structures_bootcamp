var cloneGraph = function(graph) {
    var visited = {};
    
    if(graph === null){
        return graph;
    }else{
        return dfs(graph);
    }

    function dfs(node){
        var newNode = visited[node.label] ? visited[node.label] : new UndirectedGraphNode(node.label);
        visited[node.label] = newNode;
        
        for(var i = 0; i < node.neighbors.length; i++){
            var newNeighbor = visited[node.neighbors[i].label] ? visited[node.neighbors[i].label] : dfs(node.neighbors[i]);
            newNode.neighbors.push(newNeighbor);
        }
        return newNode; 
    }   
};


var cloneGraph = function(graph) {
    if(!graph) {
        return graph;
    } else {
        return dfs(graph, {});
    }
    
    function dfs(node, visited) {
        var newNode = visited[node.label] = visited[node.label] || new UndirectedGraphNode(node.label);
        
        for(var i = 0; i < node.neighbors.length; i++) {
            var neighbor = node.neighbors[i];
            newNode.neighbors[i] = visited[neighbor.label] = visited[neighbor.label] || dfs(neighbor, visited);
        }
        
        return newNode;
    }
    
};