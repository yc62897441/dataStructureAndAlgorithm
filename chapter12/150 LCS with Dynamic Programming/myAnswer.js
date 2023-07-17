// 我自己想的
// let str1 = 'CBDAC'
// let str2 = 'BBADC'
let str1 = 'ATAACGCGCTGCTCGGGT'
let str2 = 'TCAATCAGGATCCGCTGA'

// 初始化表格
const table1 = [] // 放數字
const table2 = [] // 放方向
for (let i = 0; i <= str1.length; i++) {
    table1.push([])
    table2.push([])

    for (let j = 0; j <= str2.length; j++) {
        // 第一欄與第一列放 0，其他放 null
        if (i === 0 || j === 0) {
            table1[i].push(0)
        } else {
            table1[i].push(null)
        }

        if (i === 0 && j === 0) {
            table2[i].push(null)
        } else if (i === 0 && j > 0) {
            table2[i].push(str2[j - 1])
        } else if (i > 0 && j === 0) {
            table2[i].push(str1[i - 1])
        } else {
            table2[i].push(null)
        }
    }
}
// console.log(table1)
// console.log(table2)

// 開始計算
for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            table1[i + 1][j + 1] = table1[i][j] + 1
            table2[i + 1][j + 1] = '↖'
        } else {
            if (table1[i][j + 1] >= table1[i + 1][j]) {
                table1[i + 1][j + 1] = table1[i][j + 1]
                table2[i + 1][j + 1] = '↑'
            } else {
                table1[i + 1][j + 1] = table1[i + 1][j]
                table2[i + 1][j + 1] = '←'
            }
        }
    }
}

// 利用 table 來建立 longest common subsequence
let i = table1.length - 1
let j = table1[0].length - 1
let result = ''
while (table1[i][j] !== 0) {
    if (table2[i][j] === '↖') {
        result = str1[i - 1] + result
        i--
        j--
    } else if (table2[i][j] === '↑') {
        i--
    } else {
        j--
    }
}

console.log(table1)
console.log(table2)
console.log('result', result)
