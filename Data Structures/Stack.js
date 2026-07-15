class Stack {
    constructor() {
        this.dataSource = [];
        this.Size = 0;
        this.Push;
        this.Pop;
        this.Peek;
        this.Clear;
    }

    Push(element) {
        this.dataSource[this.Size++] = element;
    }

    Pop() {
        if(this.Size > 0) {
            return this.dataSource[--this.Size];
        }
    }

    Peek() {
        if(this.Size > -1) {
            return this.dataSource[this.Size-1];
        }
    }

    Clear() {
        if(this.Size > -1) {
            this.Size = 0;
        }
    }
    
}