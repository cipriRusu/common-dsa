class Node {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.Head = null;
        this.Length=0;
        this.Append;
        this.AllValues;
        this.InsertAfter;
        this.Remove;
    }

    AllValues() {
        let values = [];
        let current = this.Head;

        if(current !== null) {
            values.push(current.value);
        }

        while(current !== null && current.next !== null) {
            current = current.next;
            values.push(current.value)
        }

        return values;
    }

    Append(value) {
        let newValue = new Node(value);

        if(this.Head === null) {
            this.Head = newValue;
            this.Length++;
            return;
        }

        let current = this.Head;

        while(current !== null && current.next !== null) {
            current = current.next;
        }

        current.next = newValue

        this.Length++;
        return;
    }

    InsertAfter(value, after) {
        let newValue = new Node(value);

        let current = this.Head;

        while(current !== null && current.next !== null) {
            if(current.value === after) {
                newValue.next = current.next;
                current.next = newValue;
            }
            current = current.next;
        }
    }

    Remove(value) {
        let current = this.Head;
        
        if(current.value === value) {
            this.Head = current.next;
            this.Length--;
            return;
        }

        while(current !== null && current.next !== null) {
            if(current.next.value === value) {
                break;
            }

            current = current.next;
        }

        if(current.next !== null) {
            current.next = current.next.next;
            this.Length--;
            return;
        }
    }
}