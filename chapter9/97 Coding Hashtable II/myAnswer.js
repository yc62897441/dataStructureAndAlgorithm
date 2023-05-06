class HashTable {
    constructor(size) {
        this.size = size
        this.table = []
        for (let i = 0; i < this.size; i++) {
            this.table.push([])
        }
    }

    parse(str) {
        let result = 0
        for (let i = 0; i < str.length; i++) {
            result = result + str.charCodeAt(i)
        }
        return result % this.size
    }

    hash1(key) {
        return key % this.size
    }

    hash2(key) {
        let parsedKey = 0
        if (typeof key !== Number) {
            parsedKey = this.parse(key)
        } else {
            parsedKey = key
        }
        const A = (Math.sqrt(5) - 1) / 2
        return Math.floor(this.size * ((parsedKey * A) % 1))
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
myHashTable.set('white', '#FFFFFF')
myHashTable.set('magenta', '#FF00FF')
myHashTable.set('red', '#FF0000')
myHashTable.set('green', '#00FF00')
myHashTable.set('blue', '#0000FF')
myHashTable.set('black', '#000000')
myHashTable.printAll()
console.log('black', myHashTable.get('black'))
