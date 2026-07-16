class Queue {
    constructor() {
        this.dataSource = [];
        this.Length=0;
        this.Enqueue;
        this.Dequeue;
        this.Front;
        this.Tail;
    }

    Enqueue(element) {
        this.dataSource[this.Length++] = element;
    }

    Dequeue() {
        this.Length--;
        return this.dataSource.shift();
    }

    Front() {
        return this.dataSource[0];
    }

    Tail() {
        return this.dataSource[this.Length-1];
    }

    Clear() {
        this.Length=0;
        this.dataSource=[];
    }
}

let queue = new Queue();

queue.Enqueue(2);
queue.Enqueue(3);
queue.Clear()

queue.Enqueue(4)

console.log(queue)