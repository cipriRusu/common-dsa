class Stack {
    constructor() {
        this.dataSource = [];
        this.Length = 0;
        this.Push;
        this.Pop;
        this.Peek;
    }

    Push(element) {
        this.Length++;
        this.dataSource.push(element);
    }

    Pop() {
        if(this.Length > 0) {
            this.Length--;
            return this.dataSource.pop()
        }
    }

    Peek() {
        return this.dataSource[this.Length-1];
    }
}