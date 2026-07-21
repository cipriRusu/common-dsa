class HashTableLinearProbing {
    constructor() {
        this.keys=new Array(137);
        this.dataSource=new Array(137);
        this.Count=0;
        this.Put;
        this.Show;
    }

    Put(key, value) {
        let position = this.#HashFunction(key);

        if(this.keys[position] === undefined) {
            this.keys[position] = key;
            this.dataSource[position] = value;
            this.Count++;
        } else {
            while(this.keys[position] !== undefined) {
                position++;
            }

            this.keys[position] = key;
            this.dataSource[position] = value;
            this.Count++;
        }
    }

    Show() {
        for(let i=0; i < this.keys.length; i++) {
            if(this.keys[i] !== undefined) {
                console.log(this.keys[i] + '->' + this.dataSource[i]);
            }
        }
    }

    Get(key) {
        let position = this.#HashFunction(key);

        if(this.keys[position] === key) {
            return this.dataSource[position];
        } else {
            while(this.keys[position] !== undefined) {
                if(this.keys[position] === key) {
                    return this.dataSource[position];
                }
                position++;
            }

            return -1;
        }
    }

    #HashFunction(value) {
        let total=0;
        for(let i=0; i<value.length; i++) {
            total+=value.charCodeAt(i);
        }

        return total % this.keys.length;
    }
}