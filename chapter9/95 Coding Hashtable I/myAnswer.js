class HashTable {
    constructor(size) {
        this.size = size
        this.table = []
        for (let i = 0; i < this.size; i++) {
            this.table.push([])
        }
    }

    hash1(key) {
        return key % this.size
    }

    hash2(key) {
        const A = (Math.sqrt(5) - 1) / 2
        return Math.floor(this.size * ((key * A) % 1))
    }

    set(key, value) {
        const index = this.hash2(key)
        this.table[index].push({ key, value })
    }

    get(key) {
        const index = this.hash2(key)
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key == key) {
                return this.table[index][i]
            }
        }
        return null
    }

    printAll() {
        console.log(this.table)
    }
}

let myHashTable = new HashTable(6)
myHashTable.set(11424, 'Mike')
myHashTable.set(6254, 'James')
myHashTable.set(4171, 'Drake')
myHashTable.set(554, 'Kevin')
myHashTable.printAll()

console.log(myHashTable.get(6254))
console.log(myHashTable.get(4171))
console.log(myHashTable.get(500))
