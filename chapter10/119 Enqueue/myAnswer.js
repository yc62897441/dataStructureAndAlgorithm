class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority)

        // check if the priority queue is empty
        if (this.values.length === 0) {
            this.values.push(newNode)
            return true
        }

        this.values.push(newNode)
        let newNodeIndex = this.values.length - 1
        let parentNodeIndex = Math.floor((newNodeIndex - 1) / 2)
        while (parentNodeIndex >= 0 && newNode.priority > this.values[parentNodeIndex].priority) {
            // swap parent and child
            const temp = this.values[parentNodeIndex]
            this.values[parentNodeIndex] = newNode
            this.values[newNodeIndex] = temp

            // update index number
            newNodeIndex = parentNodeIndex
            parentNodeIndex = Math.floor((newNodeIndex - 1) / 2)
        }
    }

    dequeue() {
        if (this.values.length === 0) {
            return null
        }
        if (this.values.length === 1) {
            return this.values.pop()
        }
        const temp = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        this.values[this.values.length - 1] = temp
        const popNode = this.values.pop()
        this.maxHeapify(0)
        return popNode
    }

    maxHeapify(parentNodeIndex) {
        let largestNodeIndex = null
        let leftNodeIndex = parentNodeIndex * 2 + 1
        let rightNodeIndex = parentNodeIndex * 2 + 2

        if (this.values[leftNodeIndex]?.priority > this.values[rightNodeIndex]?.priority) {
            largestNodeIndex = leftNodeIndex
        } else {
            largestNodeIndex = rightNodeIndex
        }
        if (this.values[largestNodeIndex]?.priority > this.values[parentNodeIndex]?.priority) {
            const temp = this.values[parentNodeIndex]
            this.values[parentNodeIndex] = this.values[largestNodeIndex]
            this.values[largestNodeIndex] = temp
            this.maxHeapify(largestNodeIndex)
        }
    }
}

let pq = new PriorityQueue()
pq.enqueue('Eat Breakfast', 5)
pq.enqueue('Learn Java', 2)
pq.enqueue('Learn Python', 7)
pq.enqueue('Buy Textbooks', 8)
pq.enqueue('Watch Netflix', 12)
pq.enqueue('Pay Bills', 15)
console.log(pq.values)
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
