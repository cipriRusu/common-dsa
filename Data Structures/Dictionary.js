class Dictionary {
    constructor() {
        this.dataSource=[];
        this.Count=0;
        this.Add;
        this.Remove;
        this.Find;
        this.ShowAll;
    }

    Add(key, value) {
        this.dataSource[this.Count++] = {[key]: value}
    }

    Find(key) {
        return this.dataSource.filter((x) => {return Object.keys(x)[0] === String(key)})[0]
    }

    Remove(key) {
        this.dataSource = this.dataSource.filter((x) => { return Object.keys(x)[0] !== String(key) })
    }

    ShowAll() {
        return this.dataSource
    }
}