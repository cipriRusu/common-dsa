class Node {
    constructor(value, left, right) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree {
    constructor() {
        this.head=null;
        this.Count=0;
        this.Insert;
        this.Show;
    }

    Show(root) {
        if(root !== null) {
            this.Show(root.left);
            console.log(root.value);
            this.Show(root.right);
        }
    }

    Insert(value) {
        let newNode=new Node(value, null, null);

        if(this.head===null) {
            this.head=newNode;
            this.Count++;
            return;
        }

        let current=this.head;

        while(current) {
            if(newNode.value < this.head.value) {
                if(current.left === null) {
                    current.left=newNode;
                    this.Count++;
                    break;
                }
                current=current.left;
            } else {
                if(current.right === null) {
                    current.right=newNode;
                    this.Count++;
                    break;
                }
                current=current.right;
            }
        }
    }
}