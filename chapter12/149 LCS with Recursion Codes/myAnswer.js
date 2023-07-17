function simpleLCS(str1, str2) {
    if (str1.length == 0 || str2.length == 0) {
        return 0
    } else {
        if (str1[str1.length - 1] == str2[str2.length - 1]) {
            return 1 + simpleLCS(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1))
        } else {
            return Math.max(simpleLCS(str1.substring(0, str1.length - 1), str2), simpleLCS(str1, str2.substring(0, str2.length - 1)))
        }
    }
}

console.log(simpleLCS('ATAACGCGCTGCTCGGGT', 'TCAATCAGGATCCGCTGA'))

// 我自己想的
let str1 = 'ATAACGCGCTGCTCGGGT'
let str2 = 'TCAATCAGGATCCGCTGA'

// let str1 = 'CBDAC'
// let str2 = 'BBADC'

// 建立陣列，內容全為0，row 長度為 str1.length，column 長度為 str2.length + 1
const table = []
for (let i = 0; i <= str1.length; i++) {
    let tempRow = []
    for (let j = 0; j <= str2.length; j++) {
        tempRow.push(0)
    }
    table.push(tempRow)
}

// 填值
for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            table[i + 1][j + 1] = 1 + table[i][j]
        } else {
            if (table[i + 1][j] > table[i][j + 1]) {
                table[i + 1][j + 1] = table[i + 1][j]
            } else {
                table[i + 1][j + 1] = table[i][j + 1]
            }
        }
    }
}

console.log('table', table)
