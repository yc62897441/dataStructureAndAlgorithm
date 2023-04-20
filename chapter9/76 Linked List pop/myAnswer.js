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

    // 我的寫法，else 的地方跟教案不一樣
    pop() {
        if (!this.head) {
            return null
        } else if (this.length === 1) {
            const temp = this.head
            this.head = null
            this.length = 0
            return temp
        } else {
            let currentNode = this.head
            while (currentNode.next.next) {
                currentNode = currentNode.next
            }
            const temp = currentNode.next
            currentNode.next = null
            this.length = this.length - 1
            return temp
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
