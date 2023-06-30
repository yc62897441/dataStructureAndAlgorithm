// 有錯誤，有時候捨棄當前 str1[i] 不列入 currentLcs，反而可以在後面找出更長的 subsequence

// 我自己想的
let str1 = 'ATAACGCGCTGCTCGGGT'
let str2 = 'TCAATCAGGATCCGCTGA'
let count1 = 0

function lcs(str1, str2) {
    let currentLcs = '' // 當前找到最長的結果

    // str1 當前要比對的字元起始位置 i。
    for (let i = 0; i < str1.length; i++) {
        let tempLcs = ''
        let startIndex = i

        // str2 當前要比對的字元起始位置 j。
        for (let j = 0; j < str2.length; j++) {
            let currentLetter = str1[startIndex]
            count1++

            if (currentLetter === str2[j]) {
                tempLcs = tempLcs + currentLetter
                startIndex = startIndex + 1
            }
        }

        if (tempLcs.length > currentLcs.length) {
            currentLcs = tempLcs
        }
    }

    // str1 當前要比對的字元起始位置 i。
    for (let i = 0; i < str2.length; i++) {
        let tempLcs = ''
        let startIndex = i

        // str2 當前要比對的字元起始位置 j。
        for (let j = 0; j < str1.length; j++) {
            let currentLetter = str2[startIndex]
            count1++

            if (currentLetter === str1[j]) {
                tempLcs = tempLcs + currentLetter
                startIndex = startIndex + 1
            }
        }

        if (tempLcs.length > currentLcs.length) {
            currentLcs = tempLcs
        }
    }

    return currentLcs
}

console.log(lcs(str1, str2))
console.log(count1)

let count2 = 0
function aa(str1, str2) {
    count2++
    if (str1.length === 0 || str2.length === 0) {
        return 0
    }

    if (str1[str1.length - 1] === str2[str2.length - 1]) {
        return 1 + aa(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1))
    } else {
        return Math.max(
            aa(str1.substring(0, str1.length), str2.substring(0, str2.length - 1)),
            aa(str1.substring(0, str1.length - 1), str2.substring(0, str2.length))
        )
    }
}

console.log(aa(str1, str2))
console.log(count2)
