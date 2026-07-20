class Dictionary {
    constructor() {
        this.dataSource=[];
        this.Count=0;
        this.Add;
        this.Remove;
        this.Find;
        this.ShowSorted;
        this.ShowAll;
    }

    Add(key, value) {
        this.dataSource[key]=value;
        this.Count++;
    }

    Find(key) {
        return this.dataSource[key];
    }

    Remove(key) {
        delete this.dataSource[key];
        this.Count--;
    }

    ShowSorted() {
        for(let key of Object.keys(this.dataSource).sort()){
            console.log(key + '->' + this.dataSource[key]);
        }
    }

    ShowAll() {
        for(let key of Object.keys(this.dataSource)) {
            console.log(key + '->' + this.dataSource[key]);
        }
    }
}