console.log(kmp('ABCDABCDABCDABCD', 'ABCDABCD'))

function kmp(str1, str2) {
    const lps = construct_lps(str2)
    let i = 0
    let j = 0
    let counter = 0

    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            i++
            j++
            if (j === str2.length) {
                counter++
                j = lps[j - 1]
            }
        } else {
            if (j > 0) {
                j = lps[j - 1]
            } else {
                i++
            }
        }
    }

    return counter
}

function construct_lps(input) {
    const lps = [0]
    let j = 0
    let i = 1

    while (i < input.length) {
        if (input[i] === input[j]) {
            lps[i] = j + 1
            i++
            j++
        } else {
            if (j === 0) {
                lps[i] = 0
                i++
            } else {
                j = lps[j - 1]
            }
        }
    }
    return lps
}
