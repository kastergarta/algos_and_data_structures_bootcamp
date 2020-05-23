class PriorityQueue {

    constructor(){
        this.values = [];
    }

    add(val, priority){
        this.values.push({val, priority});
    };

    remove(){
        return this.values.shift();
    };

    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

let pq = new PriorityQueue();
pq.add("NY", 5)
pq.add("HK", 13)
pq.add("W", 1)
pq.sort()

