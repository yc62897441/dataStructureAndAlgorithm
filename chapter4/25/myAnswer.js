const str1 = 'abb'
const str2 = 'aba'

function sameFrequency(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const counter1 = {}
    const counter2 = {}

    for (let i = 0; i < str1.length; i++) {
        if (!counter1[str1[i]]) {
            counter1[str1[i]] = 1
        } else {
            counter1[str1[i]]++
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (!counter2[str2[i]]) {
            counter2[str2[i]] = 1
        } else {
            counter2[str2[i]]++
        }
    }

    for (let property in counter1) {
        if (counter1[property] !== counter2[property]) {
            return false
        }
        // 下面這個好像不用加
        if (!counter2[property]) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(str1, str2))
