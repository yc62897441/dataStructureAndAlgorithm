// 我的解答
function isSubsequenceString(str1, str2) {
    let str1Index = 0
    let str2Index = 0
    while (str1Index <= str1.length && str2Index <= str2.length) {
        if (str1[str1Index] === str2[str2Index]) {
            str1Index++
            str2Index++
        } else {
            str2Index++
        }
        if (str1Index >= str1.length) {
            return true
        }
    }
    return false
}

// console.log(isSubsequenceString('book', 'brooklyn')) // true
// console.log(isSubsequenceString('', 'ab dc')) // true
// console.log(isSubsequenceString('ab c', 'ab dc')) // true
// console.log(isSubsequenceString('abc', 'abc')) // true
console.log(isSubsequenceString('abc', 'acb')) // false

// 教案解法
function isSubsequence(str1, str2) {
    if (str1.length == 0) {
        console.log(true)
        return true
    }

    let pointer1 = 0
    let pointer2 = 0

    while (pointer2 < str2.length) {
        if (str1[pointer1] == str2[pointer2]) {
            pointer1++
        }
        if (pointer1 >= str1.length) {
            console.log(true)
            return true
        }
        pointer2++
    }

    console.log(false)
    return false
}

// isSubsequence("hello", "hello Dear"); // true
// isSubsequence("book", "brooklyn"); // true
// isSubsequence("abc", "bac"); // false (order matters)
isSubsequence('', 'abc') // true
