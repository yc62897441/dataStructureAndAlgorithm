let str1 = 'CBDAC'
let str2 = 'BBADC'

const table = []
const directionTable = []

for (let i = 0; i <= str1.length; i++) {
    const tableRow = []
    const directionTableRow = []

    for (let j = 0; j <= str2.length; j++) {
        tableRow.push(0)
        directionTableRow.push(null)
    }

    table.push(tableRow)
    directionTable.push(directionTableRow)
}

for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
        if (i === 0 || j === 0) {
        } else {
            if (str1[i - 1] === str2[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1
                directionTable[i][j] = '↖'
            } else {
                if (table[i - 1][j] >= table[i][j - 1]) {
                    table[i][j] = table[i - 1][j]
                    directionTable[i][j] = '↑'
                } else {
                    table[i][j] = table[i][j - 1]
                    directionTable[i][j] = '←'
                }
            }
        }
    }
}

console.log(table)
console.log(directionTable)
