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

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode.value
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
console.log(myLinkedList.get(4))
myLinkedList.printAll()
console.log(myLinkedList.length)
