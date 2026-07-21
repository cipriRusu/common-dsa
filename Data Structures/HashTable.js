//Basic implementation w/ basic hashing function. No collision handling, just a scaffold, will build upon it.

class HashTable {
    constructor() {
        this.dataSource = new Array(137);
        this.Count = 0;
        this.Put;
        this.Show;
    }

    Put(data) {
        let key = this.#HashFunction(data);
        this.dataSource[key] = data;
        this.Count++;
    }

    Show() {
        for(let i=0; i<this.dataSource.length; i++) {
            if(this.dataSource[i] !== undefined) {
                console.log(i, this.dataSource[i])
            }
        }
    }

    #HashFunction(data) {
        let total=0;
        for(let i=0; i < data.length; i++) {
            total+=data.charCodeAt(i);
        }

        return total % this.dataSource.length
    }
}