// 教案只有虛擬碼

class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }
}

class Tree {
    constructor(node) {
        this.root = node
    }

    treeTraversalBreadthFirst() {
        // 教案虛擬碼是使用 queue 當容器，不過用 array 也可以。
        const array = []
        array.push(this.root)
        for (let i = 0; i < array.length; i++) {
            let currentNode = array[i]
            currentNode.children.forEach((childNode) => {
                array.push(childNode)
            })
        }
        return array
    }

    preOrder(node) {
        const result = []
        function doPreOrder(node) {
            result.push(node)
            for (let i = 0; i < node.children.length; i++) {
                doPreOrder(node.children[i])
            }
        }
        doPreOrder(node)
        return result
    }

    inOrder(node) {
        const result = []
        function doInOrder(node) {
            if (node.children.length > 0) {
                doInOrder(node.children[0])
            }
            result.push(node)
            for (let i = 1; i < node.children.length; i++) {
                doInOrder(node.children[i])
            }
        }
        doInOrder(node)
        return result
    }

    postOrder(node) {
        const result = []
        function doPostOrder(node) {
            for (let i = 0; i < node.children.length; i++) {
                doPostOrder(node.children[i])
            }
            result.push(node)
        }
        doPostOrder(node)
        return result
    }
}

// a --> b, c
const a = new Node(2)
const b = new Node(7)
const c = new Node(5)
a.addChild(b)
a.addChild(c)

// b --> d, e, f
const d = new Node(2)
const e = new Node(10)
const f = new Node(6)
b.addChild(d)
b.addChild(e)
b.addChild(f)

// c --> g
const g = new Node(9)
c.addChild(g)

const tree1 = new Tree(a)
console.log('tree1', tree1)
console.log('tree1 treeTraversalBreadthFirst', tree1.treeTraversalBreadthFirst())
console.log('tree1 preOrder', tree1.preOrder(tree1.root))
console.log('tree1 inOrder', tree1.inOrder(tree1.root))
console.log('tree1 postOrder', tree1.postOrder(tree1.root))
