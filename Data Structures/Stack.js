class Stack {
    constructor() {
        this.dataSource = [];
        this.Length = 0;
        this.Push;
        this.Pop;
        this.Peek;
    }

    Push(element) {
        this.dataSource[this.Length++] = element;
    }

    Pop() {
        return this.dataSource[--this.Length]
    }

    Peek() {
        return this.dataSource[this.Length - 1];
    }
}