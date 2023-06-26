// 我自己想的
let str1 = 'ATAACGCGCTGCTCGGGT'
let str2 = 'TCAATCAGGATCCGCTGA'

function lcs(str1, str2) {
    let currentLcs = '' // 當前找到最長的結果

    // str1 當前要比對的字元起始位置 i。如果起始位置之後所剩的長度 < currentLcs.length 代表就不用繼續找了。
    for (let i = 0; i < str1.length - 1 - currentLcs.length; i++) {
        let tempLcs = ''
        let startIndex = i

        // str2 當前要比對的字元起始位置 j。如果起始位置之後所剩的長度 < currentLcs.length 代表就不用繼續找了。
        for (let j = 0; j < str2.length - 1 - currentLcs.length; j++) {
            let currentLetter = str1[startIndex]

            if (currentLetter === str2[j]) {
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
