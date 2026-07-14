class List {
    constructor() {
        this.dataSource = [];
        this.Append;
        this.Current;
        this.Clear;
        this.Front;
        this.End;
        this.Clear;
        this.Length = 0;
        this.Position = 0;
    }
    
    Append(element) {
        this.dataSource[this.Length++] = element;
    }

    Current() {
        return this.dataSource[this.Position];
    }

    Clear() {
        this.Length = 0;
        this.Position = 0;
        return this.dataSource = [];
    }

    End() {
        this.Position = this.Length - 1;
    }

    Front() {
        this.Position = 0;
    }

    Insert(value, after) {
        let afterId = this.#GetId(after);
        
        if(afterId > -1) {
            this.dataSource.splice(afterId+1, 0, value);
            this.Length++;
            return true;
        }

        return false;
    }

    MoveTo(newPosition) {
        if(newPosition > 0 && newPosition < this.Length) {
            this.Position = newPosition;
        }
    }

    Next() {
        if(this.Position < this.Length) {
            this.Position++;
        }
    }

    Previous() {
        if(this.Position > 0) {
            this.Position--;
        }
    }

    Remove(value) {
        let removeElementAtId = this.#GetId(value);

        if(removeElementAtId > -1) {
            this.dataSource.splice(removeElementAtId, 1);
            this.Length--;
            return true;
        }

        return false;
    }

    #GetId(value) {
        for(let i = 0; i < this.dataSource.length; i++) {
            if(value === this.dataSource[i]) {
                return i;
            }
        }

        return -1;
    }
}