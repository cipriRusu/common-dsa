class HashTableSeparateChaining {
    constructor() {
        this.dataSource=new Array(137);
        this.Count=0;
        this.Put;
        this.Get;
        this.#HashFunction;
        this.#GenerateChain()
    }

    Put(element) {
        let key=this.#HashFunction(element);
        this.dataSource[key].push(element);
        this.Count++;
    }

    Show() {
        for(let i=0; i<this.dataSource.length; i++) {
            if(this.dataSource[i] !== undefined && this.dataSource[i].length > 0) {
                console.log(i + '->' + this.dataSource[i]);
            }
        }
    }

    #GenerateChain() {
        for(let i=0; i<this.dataSource.length; i++) {
            this.dataSource[i] = [];
        }
    }

    #HashFunction(value) {
        let total=0;
        for(let i=0;i<value.length;i++) {
            total+=value.charCodeAt(i)
        }

        return total % this.dataSource.length;
    }
}