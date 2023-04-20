class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length++
    }

    unshift(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            const temp = this.head
            this.head = new Node(value)
            this.head.next = temp
        }
        this.length++
    }

    insertAt(index, value) {
        if (index > this.length || index < 0) {
            return null
        }

        if (index === 0) {
            this.unshift(value)
        } else if (index === this.length) {
            this.push(value)
        } else {
            let currentNode = this.head
            const newNode = new Node(value)
            for (let i = 1; i <= index - 1; i++) {
                currentNode = currentNode.next
            }
            newNode.next = currentNode.next
            currentNode.next = newNode
            this.length++
        }
    }

    printAll() {
        if (this.head === null) {
            console.log('nothing is in this Linked List')
            return
        }
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }
}

const myLinkedList = new LinkedList()
myLinkedList.push('Mike')
myLinkedList.push('Harry')
myLinkedList.push('James')
myLinkedList.push('Kevin')
myLinkedList.printAll()
console.log(myLinkedList.length)
