class Node {
    constructor(value) {
        this.value = value
        this.visited = false
        this.edges = []
        this.distanceFromStartNode = Infinity
        this.previous = null
    }

    addEdges(edge) {
        this.edges.push(edge)
    }
}

class Edge {
    constructor(node, weight) {
        this.node = node
        this.weight = weight
    }
}

let A = new Node('A')
let B = new Node('B')
let C = new Node('C')
let D = new Node('D')
let E = new Node('E')
let F = new Node('F')

A.addEdges(new Edge(B, 2))
A.addEdges(new Edge(C, 2))
B.addEdges(new Edge(A, 2))
B.addEdges(new Edge(D, 1))
B.addEdges(new Edge(E, 4))
C.addEdges(new Edge(A, 2))
C.addEdges(new Edge(D, 1))
C.addEdges(new Edge(F, 2))
D.addEdges(new Edge(B, 1))
D.addEdges(new Edge(C, 1))
D.addEdges(new Edge(E, 2))
D.addEdges(new Edge(F, 3))
E.addEdges(new Edge(B, 4))
E.addEdges(new Edge(D, 2))
E.addEdges(new Edge(F, 1))
F.addEdges(new Edge(C, 2))
F.addEdges(new Edge(D, 3))
F.addEdges(new Edge(E, 1))

class MinHeap {
    constructor() {
        this.values = []
    }

    enqueue(node) {
        this.values.push(node)
        let newNodeIndex = this.values.length - 1
        let parentNodeIndex = Math.floor((newNodeIndex - 1) / 2)

        while (newNodeIndex > 0 && this.values[newNodeIndex].distanceFromStartNode < this.values[parentNodeIndex].distanceFromStartNode) {
            const temp = this.values[parentNodeIndex]
            this.values[parentNodeIndex] = this.values[newNodeIndex]
            this.values[newNodeIndex] = temp

            newNodeIndex = parentNodeIndex
            parentNodeIndex = Math.floor((newNodeIndex - 1) / 2)
        }
    }

    dequeue() {
        if (this.values.length === 0) {
            return null
        } else if (this.values.length === 1) {
            return this.values.pop()
        } else {
            const temp = this.values[0]
            this.values[0] = this.values[this.values.length - 1]
            this.values[this.values.length - 1] = temp
            const popNode = this.values.pop()

            this.minHeapify(0)

            return popNode
        }
    }

    minHeapify(index) {
        let currentNodeIndex = index
        let leftNodeIndex = currentNodeIndex * 2 + 1
        let rightNodeIndex = currentNodeIndex * 2 + 2
        let smallestNodeIndex = null

        if (this.values.length - 1 < leftNodeIndex) {
            return
        } else if (this.values.length - 1 === leftNodeIndex) {
            if (this.values[currentNodeIndex].distanceFromStartNode > this.values[leftNodeIndex].distanceFromStartNode) {
                const temp = this.values[currentNodeIndex]
                this.values[currentNodeIndex] = this.values[leftNodeIndex]
                this.values[leftNodeIndex] = temp
            }
            return
        } else {
            if (this.values[leftNodeIndex].distanceFromStartNode > this.values[rightNodeIndex].distanceFromStartNode) {
                smallestNodeIndex = rightNodeIndex
            } else {
                smallestNodeIndex = leftNodeIndex
            }

            if (this.values[currentNodeIndex].distanceFromStartNode > this.values[smallestNodeIndex].distanceFromStartNode) {
                const temp = this.values[currentNodeIndex]
                this.values[currentNodeIndex] = this.values[smallestNodeIndex]
                this.values[smallestNodeIndex] = temp
                return this.minHeapify(smallestNodeIndex)
            } else {
                return
            }
        }
    }

    decrease_priority(node) {
        let currentNodeIndex = this.values.indexOf(node)
        let parentNodeIndex = Math.floor((currentNodeIndex - 1) / 2)

        while (currentNodeIndex > 0 && this.values[currentNodeIndex].distanceFromStartNode < this.values[parentNodeIndex].distanceFromStartNode) {
            const temp = this.values[parentNodeIndex]
            this.values[parentNodeIndex] = this.values[currentNodeIndex]
            this.values[currentNodeIndex] = temp

            currentNodeIndex = parentNodeIndex
            parentNodeIndex = Math.floor((currentNodeIndex - 1) / 2)
        }
    }
}

const minHeap = new MinHeap()
minHeap.enqueue(A)
minHeap.enqueue(B)
minHeap.enqueue(C)
minHeap.enqueue(D)
minHeap.enqueue(E)
minHeap.enqueue(F)

function Dijkstra(node) {
    node.visited = true
    node.distanceFromStartNode = 0
    let currentNode = minHeap.dequeue()

    while (minHeap.values.length > 0) {
        currentNode.edges.forEach((edge) => {
            if (!edge.node.visited && edge.node.distanceFromStartNode > edge.weight + currentNode.distanceFromStartNode) {
                edge.node.distanceFromStartNode = edge.weight + currentNode.distanceFromStartNode
                edge.node.previous = currentNode
                minHeap.decrease_priority(edge.node)
            }
        })

        currentNode = minHeap.dequeue()
        currentNode.visited = true
    }
}

Dijkstra(A)

console.log("A's information")
console.log(A.distanceFromStartNode)
console.log(A.previous)
console.log("B's Info")
console.log(B.distanceFromStartNode)
console.log(B.previous.value)
console.log("C's Info")
console.log(C.distanceFromStartNode)
console.log(C.previous.value)
console.log("D's Info")
console.log(D.distanceFromStartNode)
console.log(D.previous.value)
console.log("E's Info")
console.log(E.distanceFromStartNode)
console.log(E.previous.value)
console.log("F's Info")
console.log(F.distanceFromStartNode)
console.log(F.previous.value)
