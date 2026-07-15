class List {
    constructor() {
        this.dataSource = [];
        this.Size=0;
        this.Position=0;
        this.Append;
        this.Head;
        this.Tail;
        this.Next;
        this.Previous;
        this.Current;
        this.MoveCurrent;
        this.InsertValueAfter;
        this.Remove;
    }

    Append(element) {
        this.dataSource[this.Size++] = element;
    }

    Head() {
        this.Position = 0;
    }

    Tail() {
        this.Position=this.Size-1;
    }

    Next() {
        if(this.Position < this.Size) {
            this.Position++;
        }
    }

    Previous() {
        if(this.Position>=0) {
            this.Position--;
        }
    }

    MoveCurrent(newPosition) {
        if(newPosition >= 0 && newPosition <= this.Size) {
            this.Position=newPosition;
        }
    }

    Current() {
        return this.dataSource[this.Position];
    }

    InsertValueAfter(newValue, afterValue) {
        let afterValueId = this.#GetValueId(afterValue);

        if(afterValueId>-1) {
            this.Size++;
            this.dataSource.splice(afterValueId+1, 0, newValue);
        }
    }

    Remove(element) {
        let removeId = this.#GetValueId(element);

        if(removeId>-1) {
            this.dataSource.splice(removeId, 1);
        }
    }

    #GetValueId(element) {
        for(let i=0; i<this.dataSource.length; i++) {
            if(element === this.dataSource[i]) {
                return i;
            }
        }

        return -1;
    }
}