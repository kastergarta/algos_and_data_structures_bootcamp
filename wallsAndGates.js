var wallsAndGates = function(rooms) {
    var gates = [];
    
    if(!rooms || rooms.length === 0) {
        return;
    }
    
    var rows = rooms.length;
    var cols = rooms[0].length;
    
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            // find all gates
            if(rooms[i][j] === 0) {
                traverse(rooms, i, j, rows, cols, 0);
            }
        }
    }
};

function traverse(rooms, i, j, rows, cols, dist) {
    if(i >= 0 && i < rows && j >= 0 && j < cols) {
        if(rooms[i][j] !== -1 && rooms[i][j] >= dist) {
            rooms[i][j] = dist;
            traverse(rooms, i + 1, j, rows, cols, dist + 1);
            traverse(rooms, i, j + 1, rows, cols, dist + 1);
            traverse(rooms, i - 1, j, rows, cols, dist + 1);
            traverse(rooms, i, j - 1, rows, cols, dist + 1);
        }
    }
}