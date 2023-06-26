class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.path = ''
        this.queue = []
    }

    treeInsert(z) {
        let y = null
        let x = this.root

        while (x !== null) {
            y = x
            if (z.key < x.key) {
                x = x.left
            } else {
                x = x.right
            }
        }

        if (y === null) {
            this.root = z
        } else if (z.key < y.key) {
            y.left = z
        } else {
            y.right = z
        }
    }

    preOrder(node) {
        if (node !== null) {
            this.path += node.key + ' '
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            this.path += node.key + ' '
            this.inOrder(node.right)
        }
    }

    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            this.path += node.key + ' '
        }
    }

    breadthFirstTreeTraversal(node) {
        if (node !== null) {
            this.queue.push(node)
            for (let i = 0; i < this.queue.length; i++) {
                let currentNode = this.queue[i]
                if (currentNode !== null) {
                    if (currentNode.left !== null) {
                        this.queue.push(currentNode.left)
                    }
                    if (currentNode.right !== null) {
                        this.queue.push(currentNode.right)
                    }
                }
            }
        }
    }
    // bftt(n) {
    //     if (n != null) {
    //         this.queue.push(n)
    //         for (let i = 0; i < this.queue.length; i++) {
    //             let currentNode = this.queue[i]
    //             if (currentNode != null) {
    //                 if (currentNode.left != null) {
    //                     this.queue.push(currentNode.left)
    //                 }
    //                 if (currentNode.right != null) {
    //                     this.queue.push(currentNode.right)
    //                 }
    //             }
    //         }
    //     }
    // }
}

let bst = new BinarySearchTree()
bst.treeInsert(new Node(15))
bst.treeInsert(new Node(6))
bst.treeInsert(new Node(5))
bst.treeInsert(new Node(1))
bst.treeInsert(new Node(13))
bst.treeInsert(new Node(-7))
bst.treeInsert(new Node(3))
console.log(bst)

// bst.preOrder(bst.root)
// console.log(bst.path)
// bst.breadthFirstTreeTraversal(bst.root)
// console.log(bst.queue)
