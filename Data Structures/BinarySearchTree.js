class Node {
    constructor(value, left, right) {
        this.value=value;
        this.left=left;
        this.right=right;
    }
}

class BinarySearchTree {
    constructor() {
        this.head=null;
        this.Count=0;
        this.Insert;
        this.Traverse;
        this.Remove;
    }

    Insert(value) {
        let newNode=new Node(value, null, null);

        if(this.head === null) {
            this.head=newNode;
            this.Count++;
            return;
        }

        let current=this.head;

        while(current) {
            if(newNode.value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    this.Count++;
                    return;
                }
                current=current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    this.Count++;
                    return;
                }
                current=current.right;
            }
        }
    }

    Remove(value) {
        let current = this.head;
        let parent = null;

        while(current) {
            if(current.value === value) {
                if(current.left === null && current.right === null) {
                    if(parent.left === current) {
                        parent.left = null;
                        this.Count--;
                        return;
                    } else {
                        parent.right = null;
                        this.Count--;
                        return;
                    }
                }

                if(current.left !== null && current.right === null) {
                    if(parent.left === current) {
                        parent.left = current.left;
                        this.Count--;
                        return;
                    } else {
                        parent.right = current.left;
                        this.Count--;
                        return;
                    }
                }

                if(current.left === null && current.right !== null) {
                    if(parent.left === current) {
                        parent.left = current.right;
                        this.Count--;
                        return;
                    } else {
                        parent.right =current.right;
                        this.Count--;
                        return;
                    }
                }

                if(current.left !== null && current.right !== null) {
                    let replacement = current.right;
                    let replacementParent = current;

                    while(replacement.left !== null) {
                        replacementParent=replacement;
                        replacement=replacement.left;
                    }

                    current.value = replacement.value;

                    if(replacementParent.left === replacement) {
                        replacementParent.left = replacement.right;
                    } else {
                        replacementParent.right = replacement.right;
                    }

                    this.Count--;
                }
            }

            parent=current;

            if(value < current.value) {
                current=current.left;
            } else {
                current=current.right;
            }
        }
    }

    Traverse(root) {
        while(root !== null) {
            this.Traverse(root.left);
            console.log(root.value);
            this.Traverse(root.right);
            return;
        }
    }
}

let bst = new BinarySearchTree();